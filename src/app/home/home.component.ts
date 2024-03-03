import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  typedText: string = ""; // Initial text
  showCards: boolean = false; // Flag to show/hide cards

  constructor() { }

  ngOnInit(): void {
    // Text to be typed
    const textToType = "Hi i'm Giuseppe and this is my website!";

    // Typing animation
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < textToType.length) {
        this.typedText += textToType.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        // Show cards after typing animation finishes
        this.showCards = true;
      }
    }, 100); // Adjust typing speed as needed
  }
}