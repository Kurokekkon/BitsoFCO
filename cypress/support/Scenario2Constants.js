export const Relationship = {
    Relative: 1,
    Acquaintance: 2,
    Friendship: 3
  }

export const PinErrorMessage = {
  IncorrectPin: 'Incorrect PIN',
  LockedPin: 'PIN locked. Too many attempts, try again in 15 minutes.'

}

export const ProfileMenu = {
  MainUserProfile: ':nth-child(5) > .styles__DropdownToggle-sc-1stqeje-5',
  ProfileOption: '[href="/r/user/overview"]'

}

export const OverviewLeftMenuOptions = {
  LeftManuMain1: ':nth-child(',
  LeftManuMain2: ') > .styles__StyledNavLink-del7u6-6',
  Security: 3,
  Settings: 4,
  Limits: 5,
  Notifications: 6,
  Curriencies: 7,
  Autosell: 8,
  History: 9,
  Devices: 10,
  Api: 11,
  Beneficiaries: 12
}

export const BeneficiariesScreenElements = {
  AddButton: '.Container__StyledContainer-sc-1nmtyg4-0 > .styles__StyledButton-sc-1mfj3x4-1'
}

export const AddBeneficiariesFormElements = {
  Main1: 'input[name = ',
  Main2: ']',
  day: 'day',
  month: 'month',
  year: 'year',
  relationship: 'relationship',
  FirstName: '#first_name',
  LastName: '#last_name',
  SecondLastName: '#second_last_name',
  BenefitPercentage: '#percentage'
}

export const ConfimrBeneficiaryElements = {
  InputMain1: 'input[name = ',
  InputMain2: ']',
  PINField: 'pin',
  AddButton: ''
}