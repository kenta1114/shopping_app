import React from 'react';
import { ShippingDetails } from '../types';

interface ShippingFormProps {
  onSubmit: (data: ShippingDetails) => void;
}

export const ShippingForm: React.FC<ShippingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ShippingDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    postalCode: '',
    prefecture: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            姓
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            名
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          電話番号
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
          郵便番号
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          required
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="123-4567"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="prefecture" className="block text-sm font-medium text-gray-700">
          都道府県
        </label>
        <select
          id="prefecture"
          name="prefecture"
          required
          value={formData.prefecture}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">選択してください</option>
          <option value="東京都">東京都</option>
          <option value="大阪府">大阪府</option>
          <option value="神奈川県">神奈川県</option>
          {/* 他の都道府県もここに追加 */}
        </select>
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          市区町村
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          番地・建物名
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          注文を確定する
        </button>
      </div>
    </form>
  );
};