import Link from 'next/link';

export default function PaymentSuccess() {
  return (
    <div className="p-10">
      <h1 className="text-green-500">Payment Processed!</h1>
      <Link href="/dashboard" className="bg-blue-600 p-2 text-white">
        Return to Dashboard
      </Link>
    </div>
  );
}