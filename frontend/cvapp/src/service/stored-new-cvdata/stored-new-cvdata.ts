import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class StoredNewCVDataService {
  cvData: { [key: string]: any } = {
    personal: {
      firstName: '',
      middleName: '',
      lastName: '',
      age: 18,
      nationality: '',
      email: '',
      location: '',
      contact: null
    },
    education: [],
    work: [],
    skill: [],
    summary: '',
    interest: [],
    project: [],
    award: [],
    social: [],
    cvName: '',
    cvId: uuidv4(),
  };

  templateIndex = 0

  // Load existing data (object or array)
  loadData(section: string): any {
    return this.cvData[section];
  }

  // Save/Update data
saveData(section: string, data: any): void {
  if (Array.isArray(this.cvData[section]) && Array.isArray(data)) {
    // ✅ Replace entire array
    this.cvData[section] = [...data]; 
  } else {
    // ✅ Replace object
    this.cvData[section] = data;
  }
}

  // Clear a section
  resetData(section: string): void {
    if (Array.isArray(this.cvData[section])) {
      this.cvData[section] = [];
    } else if (typeof this.cvData[section] === 'object') {
      this.cvData[section] = {};
    } else {
      this.cvData[section] = null;
    }
  }

  removeFromArrays(index: number, section: string): void {
    this.cvData[section].splice(index, 1);
  }


}
