import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './index.html',
  styleUrls: ['./index.css']
})
export class ProfileComponent {
  profile = {
    name: 'Kristina Cassandra C. Cueto',
    role: 'Web & Game Developer',
    imageUrl: 'profile.jpg',
    email: 'kayceecueto09@gmail.com',
    facebook: 'https://www.facebook.com/kristinacassandra.cueto',
    contact: '0969-315-8828',
    about: 'Eager and flexible individual with a deep interest in Web and Game Development',
    resume: 'resume.pdf'
  };
}
