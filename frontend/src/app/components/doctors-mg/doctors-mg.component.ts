import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../modelStructures/doctor';
import { DoctorMongoService } from '../../services/doctor.mongo.service';
import { PaginationService } from '../../services/pagination.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-doctors-mg',
  templateUrl: './doctors-mg.component.html',
  styleUrls: ['./doctors-mg.component.css']
})
export class DoctorsMGComponent implements OnInit {

  constructor(
    private paginationService: PaginationService, 
    private activatedRoute: ActivatedRoute, 
    private doctorMongoService: DoctorMongoService
  ) { }

  ngOnInit() {
    this.retrieveAllDoctors();
  }

  doctors: Doctor[];
  doctorPagination: any = {};
  pagedDoctors: Doctor[];

  showDoctors: boolean = true;

  retrieveAllDoctors() {
    this.doctorMongoService.getDoctors().subscribe(data => {
      this.doctors = data;
      this.setPaginationPg(1);
    });
  }

  setPaginationPg(pgNum: number) {
    if (pgNum < 1 || pgNum > this.doctorPagination.totalPages) return;
    this.doctorPagination = this.paginationService.getPagination(this.doctors.length, pgNum);
    this.pagedDoctors = this.doctors.slice(this.doctorPagination.startIndex, this.doctorPagination.endIndex + 1)
  }

  toggleForm() {
    this.showDoctors = !this.showDoctors
  }

  createDoctor_Btn(nameVal: string, ageVal: number) {
    const dbName = this.activatedRoute.snapshot.paramMap.get('dbName');

    nameVal = nameVal.trim();
    if (!nameVal || !ageVal) return;
    let newDoctor = { id: 0, name: nameVal, age: ageVal }
    this.doctorMongoService.createDoctor(newDoctor).subscribe(data => {
      this.doctors.push(data);
      this.setPaginationPg(this.doctorPagination.currentPage);
    });
    this.toggleForm();
  }

  newDoctor = new Doctor; 
  
  createDoctor_DataBinding(){
    if (!this.newDoctor.name || !this.newDoctor.age) return;

    this.doctorMongoService.createDoctor(this.newDoctor).subscribe(data => {
      this.doctors.push(data);
      this.setPaginationPg(this.doctorPagination.currentPage);
    });
    this.toggleForm();
  }

  createDoctor_ReactiveForms(theForm){
    if (!theForm.doctorNameV || !theForm.doctorAgeV) return;

    let newFDoctor = new Doctor;
    newFDoctor.name= theForm.doctorNameV;
    newFDoctor.age = theForm.doctorAgeV;
    
    this.doctorMongoService.createDoctor(newFDoctor).subscribe(data => {
      this.doctors.push(data);
      this.setPaginationPg(this.doctorPagination.currentPage);
    });
    this.toggleForm();
  }

}
