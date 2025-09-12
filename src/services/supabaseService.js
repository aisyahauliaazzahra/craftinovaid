import { supabase } from '../supabaseClient';

export const supabaseService = {
  // Save user answers to Supabase
  async saveUserAnswers(userData) {
    try {
      const { data, error } = await supabase
        .from('user_answers')
        .insert([userData])
        .select();

      if (error) {
        console.error('Error saving user answers:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in saveUserAnswers:', error);
      throw error;
    }
  },

  // Get all user answers (for admin panel)
  async getAllUserAnswers() {
    try {
      const { data, error } = await supabase
        .from('user_answers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching user answers:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getAllUserAnswers:', error);
      // Fallback to localStorage if Supabase fails
      const localData = JSON.parse(localStorage.getItem('userAnswers') || '[]');
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
