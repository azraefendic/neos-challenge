package com.babbel.neos_challenge;

import static org.junit.Assert.assertEquals;
import org.junit.Test;


public class LearnerTest {
  private static Integer[] TEST_1 = {1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0};
  private static Integer[] TEST_2 = {1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0};
  private static Integer[] TEST_3 = {1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
          1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1};
  private static Integer[] STATUS_1 = {0, 0, 0, 0, 0, 0, 0};  // Slow starter
  private static Integer[] STATUS_2 = {0, 0, 0, 0, 0, 0, 1};  // Slow starter
  private static Integer[] STATUS_3 = {0, 0, 0, 0, 0, 1, 1};  // Slow starter
  private static Integer[] STATUS_4 = {0, 0, 0, 0, 1, 1, 1};  // Getting there
  private static Integer[] STATUS_5 = {0, 0, 0, 1, 1, 1, 1};  // Getting there
  private static Integer[] STATUS_6 = {0, 0, 1, 1, 1, 1, 1};  // Super user
  private static Integer[] STATUS_7 = {0, 1, 1, 1, 1, 1, 1};  // Super user
  private static Integer[] STATUS_8 = {1, 1, 1, 1, 1, 1, 1};  // Super user

  @Test
  public void  learnerActivityTest() {
    Learner learner = new Learner();
    assertEquals("4", learner.getLearnerActivity(TEST_1)[0]);
    assertEquals("8", learner.getLearnerActivity(TEST_2)[0]);
    assertEquals("12", learner.getLearnerActivity(TEST_3)[0]);
  }

  @Test
  public void longestStreakTest() {
    Learner learner = new Learner();
    assertEquals("2", learner.getLearnerActivity(TEST_1)[1]);
    assertEquals("6", learner.getLearnerActivity(TEST_2)[1]);
    assertEquals("4", learner.getLearnerActivity(TEST_3)[1]);

  }

  @Test
  public void learnerStatusTest() {
    Learner learner = new Learner();
    assertEquals("Slow starter", learner.getLearnerActivity(TEST_1)[2]);
    assertEquals("Getting there", learner.getLearnerActivity(TEST_2)[2]);
    assertEquals("Super user", learner.getLearnerActivity(TEST_3)[2]);
  }

  @Test
  public void learnerStatusExtensiveTest() {
    Learner learner = new Learner();
    assertEquals("Slow starter", learner.getLearnerActivity(STATUS_1)[2]);
    assertEquals("Slow starter", learner.getLearnerActivity(STATUS_2)[2]);
    assertEquals("Slow starter", learner.getLearnerActivity(STATUS_3)[2]);
    assertEquals("Getting there", learner.getLearnerActivity(STATUS_4)[2]);
    assertEquals("Getting there", learner.getLearnerActivity(STATUS_5)[2]);
    assertEquals("Super user", learner.getLearnerActivity(STATUS_6)[2]);
    assertEquals("Super user", learner.getLearnerActivity(STATUS_7)[2]);
    assertEquals("Super user", learner.getLearnerActivity(STATUS_8)[2]);
  }


}
