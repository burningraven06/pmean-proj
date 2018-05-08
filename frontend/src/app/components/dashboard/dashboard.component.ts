import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../../modelStructures/doctor';
import { DoctorPGService } from '../../services/doctor.pg.service';
import { DoctorMongoService } from '../../services/doctor.mongo.service';
import { LoginAuthService} from '../../services/loginAuth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private doctorPgService: DoctorPGService, 
    private activatedRoute: ActivatedRoute, 
    private doctorMongoService: DoctorMongoService,
    private loginAuthService: LoginAuthService
  ) { }

  dashboardPGDoctors: Doctor[];
  dashboardMGDoctors: Doctor[];

  retrieveRecentDoctors(): void {
    this.doctorPgService.getDoctors().subscribe(data => this.dashboardPGDoctors = data.slice(1, 4));
    this.doctorMongoService.getDoctors().subscribe(data => this.dashboardMGDoctors = data.slice(1, 4))
  }

  ngOnInit() {
    this.retrieveRecentDoctors();
  }

}
