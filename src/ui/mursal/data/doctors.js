import shamsirPhoto from '../../../assets/find-doctor/shamsir.jpg';
import khairullahPhoto from '../../../assets/find-doctor/khairullah.jpg';

export const doctors = [
  {
    id: 1,
    name: 'Prof. Dr. Muhammad Shamsir Bin Mohd Aris',
    photo: shamsirPhoto,
    field: 'Obstetics and Gynaecology',
    role: 'Visiting Consultant',
    address: 'Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia',
    website: 'https://klinikpakar.usim.edu.my',
    phone: '+60126504921',
    next: 'Tuesday, March 22',
    specialty: 'Doctor',
    gender: 'Male',
    conditions: ['Doctor'],
    languages: ['English', 'Malay'],
    ages: 'Adults',
    online: true,
    primaryCare: false,
  },
  {
    id: 2,
    name: 'PROF DR. MADYA DR. Khairullah',
    photo: khairullahPhoto,
    field: 'Obstetics and Gynaecology',
    role: 'Visiting Consultant',
    address: 'Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia',
    website: 'https://klinikpakar.usim.edu.my',
    phone: '+60126504921',
    next: 'Tuesday, March 22',
    specialty: 'Doctor',
    gender: 'Male',
    conditions: ['Doctor'],
    languages: ['English', 'Malay'],
    ages: 'Adults',
    online: true,
    primaryCare: false,
  },
];

export const specialtyOptions = ['Doctor', 'Surgery'];
export const genderOptions = ['Male', 'Female'];
export const conditionOptions = ['Emergency', 'Family', 'Doctor'];
export const languageOptions = ['English', 'Malay', 'Hindi', 'German', 'Pashto'];
export const ageOptions = ['All Ages', 'Children', 'Adults'];

export function findDoctor(id) {
  return doctors.find((d) => d.id === id) || null;
}