
  
     interface Student {
        firstname: string;
        name: string;
        studiengang: string; 
        age: number;
        gender: boolean; 
        matrikel: number;
    }

     interface Studenten {         
     [matrikel: string]: Student;
    }
 
