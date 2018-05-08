import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../modelStructures/doctor';
import { ActivatedRoute } from '@angular/router';
import { DoctorPGService } from '../../services/doctor.pg.service';

@Component({
  selector: 'app-doctors-search-pg',
  templateUrl: './doctors-search-pg.component.html',
  styleUrls: ['./doctors-search-pg.component.css']
})

export class DoctorSearchPGComponent implements OnInit {

  searchResults: Object[];

  constructor(
    private doctorPgService: DoctorPGService, 
    private activatedRoute: ActivatedRoute
  ) { }

  searchDoctor(queryString: string) {
    if (!queryString) {
      this.searchResults = [];
      return;
    }
    this.doctorPgService.searchDoctoresByName(queryString).subscribe(data => this.searchResults = data)
  }

  ngOnInit(): void {
  }
}