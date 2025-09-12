import { supabase } from '../supabaseClient';

export const supabaseService = {
  // Test connection to Supabase
  async testConnection() {
    try {
      const { data, error } = await supabase
        .from('user_answers')
        .select('count', { count: 'exact', head: true });
      
      if (error) {
        console.error('Connection test failed:', error);
        return false;
      }
      
      console.log('Supabase connection successful');
      return true;
    } catch (error) {
      console.error('Connection test error:', error);
      return false;
    }
  },

  // Save user answers to Supabase with enhanced error handling
  async saveUserAnswers(userData) {
    try {
      console.log('Attempting to save user data:', userData);
      
      // Test connection first
      const connectionOk = await this.testConnection();
      if (!connectionOk) {
        throw new Error('Unable to connect to Supabase');
      }

      // Prepare data for insertion
      const dataToInsert = {
        user_info: userData.user_info,
        pre_test_answers: userData.pre_test_answers,
        post_test_answers: userData.post_test_answers,
        stress_level: userData.stress_level,
        timestamp: userData.timestamp
      };

      console.log('Data to insert:', dataToInsert);

      const { data, error } = await supabase
        .from('user_answers')
        .insert([dataToInsert])
        .select();

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw error;
      }

      console.log('Data saved successfully:', data);
      return data;
    } catch (error) {
      console.error('Error in saveUserAnswers:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      throw error;
    }
  },

  // Get all user answers (for admin panel)
  async getAllUserAnswers() {
    try {
      console.log('Fetching user answers from Supabase...');
      
      const { data, error } = await supabase
        .from('user_answers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching user answers:', error);
        throw error;
      }

      console.log('User answers fetched:', data);
      return data || [];
    } catch (error) {
      console.error('Error in getAllUserAnswers:', error);
      // Fallback to localStorage if Supabase fails
      const localData = JSON.parse(localStorage.getItem('userAnswers') || '[]');
      console.log('Using localStorage fallback:', localData);
      return localData;
    }
  },

  // Delete user answer by ID
  async deleteUserAnswer(id) {
    try {
      const { error } = await supabase
        .from('user_answers')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting user answer:', error);
        throw error;
      }

      return true;
    } catch (error) {
      console.error('Error in deleteUserAnswer:', error);
      throw error;
    }
  },

  // Update user answer
  async updateUserAnswer(id, updatedData) {
    try {
      const { data, error } = await supabase
        .from('user_answers')
        .update(updatedData)
        .eq('id', id)
        .select();

      if (error) {
        console.error('Error updating user answer:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in updateUserAnswer:', error);
      throw error;
    }
  }
};