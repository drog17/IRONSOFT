import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  agreed: boolean;
  isSubmitting: boolean;
  submitStatus: string | null;
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  agreed: false,
  isSubmitting: false,
  submitStatus: null,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFieldValue: <K extends keyof FormState>(
      state: Draft<FormState>,
      action: PayloadAction<{ field: K; value: FormState[K] }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    startSubmit: (state) => {
      state.isSubmitting = true;
      state.submitStatus = null;
    },
    submitSuccess: (state) => {
      state.isSubmitting = false;
      state.submitStatus = 'Thank you! Your message has been sent successfully.';
      state.name = '';
      state.email = '';
      state.phone = '';
      state.message = '';
      state.agreed = false;
    },
    submitFailure: (state, action: PayloadAction<string>) => {
      state.isSubmitting = false;
      state.submitStatus = action.payload;
    },
  },
});

export const { setFieldValue, startSubmit, submitSuccess, submitFailure } = formSlice.actions;
export default formSlice.reducer;