import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: any[] = []; // Array to store blogs

  constructor() { }

  ngOnInit(): void {
    const savedBlogs = localStorage.getItem('blogs');
    if (savedBlogs) {
      this.blogs = JSON.parse(savedBlogs); // Parse the saved data from localStorage
    }
  }

  // Method to create a blog
  createBlog(title: string, content: string): void {
    if (title && content) {
      const newBlog = {
        id: new Date().getTime(), // Unique ID based on timestamp
        title: title,
        content: content, // Store raw HTML content
        comments: [] // Initially no comments
      };

      this.blogs.push(newBlog); // Add the new blog to the array
      this.saveBlogs(); // Save the updated blog list to localStorage
    }
  }

  // Method to delete a blog
  deleteBlog(blogId: number): void {
    this.blogs = this.blogs.filter(blog => blog.id !== blogId); // Remove the blog with the matching ID
    this.saveBlogs(); // Save the updated blog list to localStorage
  }

  // Method to add a comment to a blog
  addComment(blogId: number, comment: string): void {
    const blog = this.blogs.find(b => b.id === blogId); // Find the blog with the given ID
    if (blog && comment) {
      blog.comments.push(comment); // Add the new comment
      this.saveBlogs(); // Save the updated blog list to localStorage
    }
  }

  // Save the blogs array to localStorage
  private saveBlogs(): void {
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }
}
