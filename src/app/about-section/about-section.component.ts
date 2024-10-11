import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadCV(): void {
    let link = document.createElement("a");
    link.download = "Gowtham_Devaraj.pdf";
    link.href = "../../assets/Gowtham_Devaraj.pdf";
    link.click();
  }
}
