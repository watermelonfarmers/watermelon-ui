export class MockRequirementService {
  
    requirementsUrl= 'https://watermelon-service.herokuapp.com/api/requirements';
  
    readRequirements(){
      return 'readRequirments';
    }
  
    readOneRequirement(id : Number){
      return 'readOneRequirement';
    }
  
    createRequirement() {
      return 'createRequirement';
    }
  
    updateRequirement() {
      return 'updateRequirement';
    }
  
    deleteRequirement(id : Number) {
      return 'deleteRequirement';
    }
  };
