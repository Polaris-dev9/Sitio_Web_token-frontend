"use client"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaUser, FaEnvelope, FaLock, FaIdCard, FaBuilding } from 'react-icons/fa'

type FormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  idType: string
  idNumber: string
  companyName: string
  acceptTerms: boolean
}

export default function Register() {
  const [step, setStep] = useState(1)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>()
  const password = watch('password')

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically make an API call to your backend
      console.log('Form data:', data)
      // Proceed to KYC verification
      setStep(2)
    } catch (error) {
      console.error('Registration error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-accent">
      {/* Hero Section */}
      <section className="relative bg-secondary text-accent">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-light opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-primary">Create Your Account</span>
              <span className="block">Start Your Investment Journey</span>
            </h1>
            <p className="mt-6 text-xl text-accent-dark max-w-3xl mx-auto">
              Join InmoToken and gain access to premium real estate investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className={`flex-1 text-center ${step >= 1 ? 'text-primary' : 'text-secondary-light'}`}>
                  <div className="w-10 h-10 mx-auto rounded-full border-2 flex items-center justify-center">
                    <FaUser className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm">Account</p>
                </div>
                <div className={`flex-1 text-center ${step >= 2 ? 'text-primary' : 'text-secondary-light'}`}>
                  <div className="w-10 h-10 mx-auto rounded-full border-2 flex items-center justify-center">
                    <FaIdCard className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm">KYC/AML</p>
                </div>
                <div className={`flex-1 text-center ${step >= 3 ? 'text-primary' : 'text-secondary-light'}`}>
                  <div className="w-10 h-10 mx-auto rounded-full border-2 flex items-center justify-center">
                    <FaBuilding className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm">Complete</p>
                </div>
              </div>
            </div>

            {step === 1 && (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary">
                      First Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-secondary-light" />
                      </div>
                      <input
                        type="text"
                        {...register('firstName', { required: true })}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="mt-2 text-sm text-red-600">First name is required</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary">
                      Last Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-secondary-light" />
                      </div>
                      <input
                        type="text"
                        {...register('lastName', { required: true })}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="mt-2 text-sm text-red-600">Last name is required</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary">
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-secondary-light" />
                    </div>
                    <input
                      type="email"
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">Valid email is required</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-secondary">
                    Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 text-secondary-light" />
                    </div>
                    <input
                      type="password"
                      {...register('password', { required: true, minLength: 8 })}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">Password must be at least 8 characters</p>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary">
                    Confirm Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 text-secondary-light" />
                    </div>
                    <input
                      type="password"
                      {...register('confirmPassword', {
                        required: true,
                        validate: value => value === password
                      })}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-600">Passwords do not match</p>
                  )}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('acceptTerms', { required: true })}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="acceptTerms" className="ml-2 block text-sm text-secondary">
                    I accept the{' '}
                    <a href="/terms" className="text-primary hover:text-primary-dark">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                {errors.acceptTerms && (
                  <p className="mt-2 text-sm text-red-600">You must accept the terms</p>
                )}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-secondary bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Continue to KYC/AML
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-secondary">KYC/AML Verification</h3>
                <p className="text-secondary-light">
                  Please provide the following information for identity verification:
                </p>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="idType" className="block text-sm font-medium text-secondary">
                      ID Type
                    </label>
                    <select
                      {...register('idType', { required: true })}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                    >
                      <option value="">Select ID Type</option>
                      <option value="passport">Passport</option>
                      <option value="drivers_license">Driver's License</option>
                      <option value="national_id">National ID</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="idNumber" className="block text-sm font-medium text-secondary">
                      ID Number
                    </label>
                    <input
                      type="text"
                      {...register('idNumber', { required: true })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-secondary">
                      Company Name (if applicable)
                    </label>
                    <input
                      type="text"
                      {...register('companyName')}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-secondary bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Submit Verification
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-secondary">Registration Complete!</h3>
                <p className="mt-2 text-secondary-light">
                  Your account is being verified. We'll notify you once the verification is complete.
                </p>
                <div className="mt-6">
                  <a
                    href="/dashboard"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-secondary bg-primary hover:bg-primary-dark"
                  >
                    Go to Dashboard
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 