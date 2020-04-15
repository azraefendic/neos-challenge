import unittest
import challenge

TEST_1 = [1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0]
TEST_2 = [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
TEST_3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
          1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1]
STATUS_1 = [0, 0, 0, 0, 0, 0, 0]  # Slow starter
STATUS_2 = [0, 0, 0, 0, 0, 0, 1]  # Slow starter
STATUS_3 = [0, 0, 0, 0, 0, 1, 1]  # Slow starter
STATUS_4 = [0, 0, 0, 0, 1, 1, 1]  # Getting there
STATUS_5 = [0, 0, 0, 1, 1, 1, 1]  # Getting there
STATUS_6 = [0, 0, 1, 1, 1, 1, 1]  # Super user
STATUS_7 = [0, 1, 1, 1, 1, 1, 1]  # Super user
STATUS_8 = [1, 1, 1, 1, 1, 1, 1]  # Super user


class TestLearnerActivity(unittest.TestCase):
    def test_lessons_completed(self):
        self.assertEqual(challenge.evaluate_learner_activity(
            TEST_1)[0], 4, "Learner activity should equal 4")
        self.assertEqual(challenge.evaluate_learner_activity(
            TEST_2)[0], 8, "Learner activity should equal 8")
        self.assertEqual(challenge.evaluate_learner_activity(
            TEST_3)[0], 12, "Learner activity should equal 12")

    def test_longest_streak(self):
        self.assertEqual(challenge.evaluate_learner_activity(
            TEST_1)[1], 2, "Longest streak is 2")
        self.assertEqual(challenge.evaluate_learner_activity(
            TEST_2)[1], 6, "Longest streak is 6")
        self.assertEqual(challenge.evaluate_learner_activity(
            TEST_3)[1], 4, "Longest streak is 4")

    def test_user_level(self):
        self.assertEqual(challenge.evaluate_learner_activity(
            TEST_1)[2], "Slow starter", "User status is Slow starter")
        self.assertEqual(challenge.evaluate_learner_activity(
            TEST_2)[2], "Getting there", "User status is Getting there")
        self.assertEqual(challenge.evaluate_learner_activity(
            TEST_3)[2], "Super user", "User status is Super user")

    def test_user_level_extensive(self):
        self.assertEqual(challenge.evaluate_learner_activity(
            STATUS_1)[2], "Slow starter", "User status is Slow starter")
        self.assertEqual(challenge.evaluate_learner_activity(
            STATUS_2)[2], "Slow starter", "User status is Slow starter")
        self.assertEqual(challenge.evaluate_learner_activity(
            STATUS_3)[2], "Slow starter", "User status is Slow starter")
        self.assertEqual(challenge.evaluate_learner_activity(
            STATUS_4)[2], "Getting there", "User status is Getting there")
        self.assertEqual(challenge.evaluate_learner_activity(
            STATUS_5)[2], "Getting there", "User status is Getting there")
        self.assertEqual(challenge.evaluate_learner_activity(
            STATUS_6)[2], "Super user", "User status is Super user")
        self.assertEqual(challenge.evaluate_learner_activity(
            STATUS_7)[2], "Super user", "User status is Super user")
        self.assertEqual(challenge.evaluate_learner_activity(
            STATUS_8)[2], "Super user", "User status is Super user")


if __name__ == "__main__":
    unittest.main()
