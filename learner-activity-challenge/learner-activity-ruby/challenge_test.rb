require "test/unit"
require_relative './challenge'

class LearnerHelperTest < Test::Unit::TestCase
    @@test1 = [1,1,0,1,0,1,0,0,0,0,0]; 
    @@test2 = [1,1,0,0,0,0,1,1,1,1,1,1,0,0,0];
    @@test3 = [1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1];
    @@status1 = [0,0,0,0,0,0,0]; # Slow starter
    @@status2 = [0,0,0,0,0,0,1]; # Slow starter
    @@status3 = [0,0,0,0,0,1,1]; # Slow starter
    @@status4 = [0,0,0,0,1,1,1]; # Getting there 
    @@status5 = [0,0,0,1,1,1,1]; # Getting there
    @@status6 = [0,0,1,1,1,1,1]; # Super user
    @@status8 = [1,1,1,1,1,1,1]; # Super user
    @@status7 = [0,1,1,1,1,1,1]; # Super user

    def test_evaluate_learner_activity
        
        assert_equal 4, LearnerHelper.evaluate_learner_activity(@@test1)[0], "Learner activity should return 4"
        assert_equal 8, LearnerHelper.evaluate_learner_activity(@@test2)[0], "Learner activity should return 8"
        assert_equal 12, LearnerHelper.evaluate_learner_activity(@@test3)[0], "Learner activity should return 12"
        
    end

    def test_get_longest_streak
        assert_equal 2, LearnerHelper.evaluate_learner_activity(@@test1)[1], "Longest streak should be 2"
        assert_equal 6, LearnerHelper.evaluate_learner_activity(@@test2)[1], "Longest streak should be 6"
        assert_equal 4, LearnerHelper.evaluate_learner_activity(@@test3)[1], "Longest streak should be 4"
    end

    def test_get_user_status
        assert_equal "Slow starter", LearnerHelper.evaluate_learner_activity(@@test1)[2], "User status should be 'Slow starter'"
        assert_equal "Getting there", LearnerHelper.evaluate_learner_activity(@@test2)[2], "User status should be 'Getting there'"
        assert_equal "Super user", LearnerHelper.evaluate_learner_activity(@@test3)[2], "User status should be 'Super user'"
    end

    def test_get_user_status_all
        assert_equal "Slow starter", LearnerHelper.evaluate_learner_activity(@@status1)[2], "User status should be 'Slow starter'"
        assert_equal "Slow starter", LearnerHelper.evaluate_learner_activity(@@status2)[2], "User status should be 'Slow starter'"
        assert_equal "Slow starter", LearnerHelper.evaluate_learner_activity(@@status3)[2], "User status should be 'Slow starter'"
        assert_equal "Getting there", LearnerHelper.evaluate_learner_activity(@@status4)[2], "User status should be 'Getting there'"
        assert_equal "Getting there", LearnerHelper.evaluate_learner_activity(@@status5)[2], "User status should be 'Getting there'"
        assert_equal "Super user", LearnerHelper.evaluate_learner_activity(@@status6)[2], "User status should be 'Super user'"
        assert_equal "Super user", LearnerHelper.evaluate_learner_activity(@@status7)[2], "User status should be 'Super user'"
        assert_equal "Super user", LearnerHelper.evaluate_learner_activity(@@status8)[2], "User status should be 'Super user'"
    end
end

