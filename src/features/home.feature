Feature: Home page of EPAM Website

  @Regression
  Scenario: As a user, I can list all Epam services

    Given I am on the Epam home page
    When I click on the services menu option 
    Then I should see 7 services
    

  @Regression
  Scenario Outline: As a user, I can fill out the contact form

    Given I am on the Epam home page
    When I click on the contact button
    And I fill out the contact form with the following details
     | firstname | lastname | email           | phone      | company   |
     | <firstname> | <lastname> | <email> | <phone> | <company> |
    And I submit the form
    Then the How Heard About Us check is required 
   Examples:
      | firstname | lastname | email             | phone      | company    |
      | John      | Doe      | john@example.com  | 1234567890 | Tech Corp  |
      | Jane      | Smith    | jane@example.com  | 2345678901 | Health Inc |
      | Bob       | Brown    | bob@example.com   | 3456789012 | Auto Ltd   |

 @TBD
  Scenario: As a user, I can list all Epam services

    Given I am on the Epam home page
    When I click on the services menu option 
    Then I should see 8 services