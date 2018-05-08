import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../../modelStructures/doctor';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DoctorMongoService } from '../../services/doctor.mongo.service';

@Component({
  selector: 'app-doctor-details-mg',
  templateUrl: './doctor-details-mg.component.html',
  styleUrls: ['./doctor-details-mg.component.css']
})

export class DoctorDetailsMGComponent implements OnInit {

  doctor: Doctor;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private location: Location, 
    private doctorMongoService: DoctorMongoService
  ) { }

  getDoctor(): void {
    const doctorID = this.activatedRoute.snapshot.paramMap.get('id');
    this.doctorMongoService.getDoctorByID(doctorID).subscribe(data => this.doctor = data);
  }

  ngOnInit() {
    this.getDoctor();
  }

  goBack() {
    this.location.back();
  }

  updateDoctor() {
    this.doctorMongoService.updateDoctorByID(this.doctor).subscribe(() => this.goBack());
  }

  deleteDoctor() {
    this.doctorMongoService.deleteDoctorByID(this.doctor).subscribe(() => this.goBack());
  }
}
