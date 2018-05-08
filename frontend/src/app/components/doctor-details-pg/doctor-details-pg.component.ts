import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../../modelStructures/doctor';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DoctorPGService } from '../../services/doctor.pg.service';

@Component({
  selector: 'app-doctor-details-pg',
  templateUrl: './doctor-details-pg.component.html',
  styleUrls: ['./doctor-details-pg.component.css']
})

export class DoctorDetailsPGComponent implements OnInit {

  @Input() doctor: Doctor;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private doctorPgService: DoctorPGService, 
    private location: Location, private router: Router
  ) { }


  getDoctor(): void {
    const DoctorID = +this.activatedRoute.snapshot.paramMap.get('id');
    this.doctorPgService.getDoctorByID(DoctorID).subscribe(data => this.doctor = data);
  }

  ngOnInit() {
    this.getDoctor();
  }

  goBack() {
    this.location.back();
  }

  updateDoctor() {
    this.doctorPgService.updateDoctorByID(this.doctor).subscribe(() => this.goBack());
  }

  deleteDoctor() {
    this.doctorPgService.deleteDoctorByID(this.doctor).subscribe(() => this.router.navigate(['/doctors-pg']));
  }
}
