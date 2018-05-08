import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../modelStructures/doctor';
import { ActivatedRoute } from '@angular/router';
import { DoctorMongoService } from '../../services/doctor.mongo.service';

@Component({
  selector: 'app-doctors-search-mg',
  templateUrl: './doctors-search-mg.component.html',
  styleUrls: ['./doctors-search-mg.component.css']
})
export class DoctorSearchMGComponent implements OnInit {

  searchResults: Object[];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private doctorMongoService: DoctorMongoService
  ) { }

  searchDoctor(queryString: string) {
    if (!queryString) {
      this.searchResults = [];
      return;
    }
    this.doctorMongoService.searchDoctorsByName(queryString).subscribe(data => this.searchResults = data)
  }

  ngOnInit(): void {
  }
}