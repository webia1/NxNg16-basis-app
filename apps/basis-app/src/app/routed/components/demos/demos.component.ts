import { CustomMaterialModule } from '@angular-basis-app-workspace/shared-ui';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-basis-app-workspace-demos',
  standalone: true,
  imports: [CommonModule, CustomMaterialModule],
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss'],
})
export class DemosComponent {}
