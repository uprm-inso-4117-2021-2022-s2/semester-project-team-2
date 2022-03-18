Feature: Is it vaccine dude dat yet?
  Everybody wants to know when it's Friday

  Scenario: Is not the due date
    Given today is not the due date
    When I ask whether it's the due date yet
    Then I should be told "No."

  Scenario: Due date. 
    Given today is the due date
    When I ask whether it's the due date yet
    Then I should be told "Yes, apply vaccine."