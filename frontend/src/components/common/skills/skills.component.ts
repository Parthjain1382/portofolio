import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../../assets/interface/skillCategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'HTML5', icon: 'fa-brands fa-html5 fa-4x', description: 'Markup Language' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt fa-4x', description: 'Style Sheet Language' },
      { name: 'JavaScript', icon: 'fa-brands fa-js fa-4x', description: 'Programming Language' },
      { name: 'TypeScript', icon: 'fa-brands fa-js fa-4x', description: 'Superset of JavaScript' },
      { name: 'XML', icon: 'fa-solid fa-code fa-4x', description: 'Markup Language' },
      { name: 'C', icon: 'fa-solid fa-c fa-4x', description: 'Programming Language' }, // placeholder
      { name: 'Java', icon: 'fa-brands fa-java fa-4x', description: 'Object-Oriented Language' },
      { name: 'Python', icon: 'fa-brands fa-python fa-4x', description: 'Programming Language' },
      { name: 'Swift', icon: 'fa-brands fa-swift fa-4x', description: 'Programming Language' }
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'Angular', icon: 'fa-brands fa-angular fa-4x', description: 'Frontend Framework' },
      { name: 'React', icon: 'fa-brands fa-react fa-4x', description: 'Frontend Library' },
      { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap fa-4x', description: 'CSS Framework' },
      { name: 'Sass', icon: 'fa-brands fa-sass fa-4x', description: 'CSS Preprocessor' },
      { name: 'Redux', icon: 'fa-solid fa-layer-group fa-4x', description: 'State Management Library' },
      { name: 'HighCharts', icon: 'fa-solid fa-chart-line fa-4x', description: 'Data Visualization Library' },
      { name: 'MEAN Stack', icon: 'fa-solid fa-layer-group fa-4x', description: 'Full Stack JavaScript Framework' },
      { name: 'SwiftUI', icon: 'fa-brands fa-swift fa-4x', description: 'UI Framework for Swift' }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: 'fa-brands fa-node-js fa-4x', description: 'Backend Runtime' },
      { name: 'Express.js', icon: 'fa-solid fa-code-branch fa-4x', description: 'Web Framework for Node.js' },
      { name: 'Mongoose', icon: 'fa-solid fa-leaf fa-4x', description: 'MongoDB ODM' },
      { name: 'Next.js', icon: 'fa-solid fa-n fa-4x', description: 'React Framework' },
      { name: 'Django', icon: 'fa-solid fa-leaf fa-4x', description: 'Python Framework' }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: 'fa-solid fa-database fa-4x', description: 'NoSQL Database' },
      { name: 'MySQL', icon: 'fa-solid fa-database fa-4x', description: 'Relational Database' },
      { name: 'Firebase', icon: 'fa-solid fa-fire fa-4x', description: 'Backend as a Service' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'fa-brands fa-aws fa-4x', description: 'Cloud Services Provider' },
      { name: 'Netlify', icon: 'fa-solid fa-cloud fa-4x', description: 'Frontend Deployment Platform' },
      { name: 'Render', icon: 'fa-solid fa-server fa-4x', description: 'Cloud Hosting Platform' },
      { name: 'Vercel', icon: 'fa-solid fa-bolt fa-4x', description: 'Frontend Deployment Platform' },
      { name: 'CI/CD', icon: 'fa-solid fa-cogs fa-4x', description: 'Continuous Integration & Delivery' },
      { name: 'Docker', icon: 'fa-brands fa-docker fa-4x', description: 'Containerization' },
      { name: 'Kubernetes', icon: 'fa-solid fa-network-wired fa-4x', description: 'Container Orchestration' }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: 'fa-brands fa-git-alt fa-4x', description: 'Version Control System' },
      { name: 'GitHub', icon: 'fa-brands fa-github fa-4x', description: 'Code Hosting Platform' },
      { name: 'GitLab', icon: 'fa-brands fa-gitlab fa-4x', description: 'DevOps Platform' },
      { name: 'VS Code', icon: 'fa-solid fa-code fa-4x', description: 'Code Editor' },
      { name: 'Xcode', icon: 'fa-brands fa-apple fa-4x', description: 'iOS Development IDE' },
      { name: 'Chrome DevTools', icon: 'fa-brands fa-chrome fa-4x', description: 'Browser Debugging Tools' },
      { name: 'Jupyter Notebook', icon: 'fa-brands fa-python fa-4x', description: 'Python IDE' },
      { name: 'Figma', icon: 'fa-brands fa-figma fa-4x', description: 'Design Tool' },
      { name: 'Jira', icon: 'fa-brands fa-jira fa-4x', description: 'Agile Project Management' },
      { name: 'Jasmine', icon: 'fa-solid fa-vial fa-4x', description: 'JavaScript Testing Framework' }
    ]
  },
  {
    title: 'Operating Systems',
    skills: [
      { name: 'Windows', icon: 'fa-brands fa-windows fa-4x', description: 'Operating System' },
      { name: 'Linux', icon: 'fa-brands fa-linux fa-4x', description: 'Operating System' },
      { name: 'macOS', icon: 'fa-brands fa-apple fa-4x', description: 'Operating System' }
    ]
  }
];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['/recruitHome']);
  }
}
