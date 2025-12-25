import { Metadata } from 'next';
import RegistrationForm from './RegistrationForm';

export const metadata: Metadata = {
    title: 'ನೋಂದಣಿ (Registration)',
    description: 'Register for Malabar Kannada Sangamam. Join the community of Kannada students in Kerala for culture and unity.',
};

export default function RegistrationPage() {
    return <RegistrationForm />;
}
