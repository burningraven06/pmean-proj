import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../modelStructures/doctor';
import { DoctorPGService } from '../../services/doctor.pg.service';
import { PaginationService } from '../../services/pagination.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctors-pg',
  templateUrl: './doctors-pg.component.html',
  styleUrls: ['./doctors-pg.component.css']
})
export class DoctorsPGComponent implements OnInit {

  constructor(
    private doctorPgService: DoctorPGService, 
    private paginationService: PaginationService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.retrieveAlldoctors();
  }

  doctors: Doctor[];
  doctorPagination: any = {};
  pagedDoctors: Doctor[];

  showDoctors: boolean = true;

  retrieveAlldoctors() {
    this.doctorPgService.getDoctors().subscribe(data => {
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

  createDoctor(nameVal: string, ageVal: number) {
    nameVal = nameVal.trim();
    if (!nameVal || !ageVal) return;
    let newDoctor = { id: 0, name: nameVal, age: ageVal }
    this.doctorPgService.createDoctor(newDoctor).subscribe(data => {
      this.doctors.push(data);
      this.setPaginationPg(this.doctorPagination.currentPage);
    });
    this.toggleForm();
  }

}
