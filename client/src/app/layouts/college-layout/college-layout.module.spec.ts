import { CollegeLayoutModule } from './college-layout.module';

describe('CollegeLayoutModule', () => {
  let collegeLayoutModule: CollegeLayoutModule;

  beforeEach(() => {
    collegeLayoutModule = new CollegeLayoutModule();
  });

  it('should create an instance', () => {
    expect(collegeLayoutModule).toBeTruthy();
  });
});
