import { Component, OnInit } from '@angular/core';
import { Job } from "../job";
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})


export class JobsComponent implements OnInit {

  jobs: Job[] = [];

  getJobs() : void {
    this.jobs = this.jobService.getJobs();
  }

  selectedJob?: Job;
  onSelect(job: Job): void {
    this.selectedJob = job;
  }

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }

}
