import React, { useState } from 'react';
import Input from './Input';
import InputPassword from './InputPassword';

export default function Reservation() {
  let [date, setDate] = useState(new Date().toLocaleDateString('de-DE'));
  let [time, setTime] = useState(new Date().toLocaleTimeString('de-DE'));
  let [guests, setGuests] = useState('');
  let [occasion, setOccasion] = useState('');
  let [name, setName] = useState('');
  let [phone, setPhone] = useState('');

  return (
    <>
      <div
        class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        id="reservation"
      >
        <div class=" rounded-lg border border-yellow-400 shadow-xl">
          <div class="px-6 pb-12 pt-10 sm:p-10 sm:pb-6">
            <h2 class="text-3xl font-extrabold text-yellow-400 sm:text-4xl">
              <span class="mb-4 block">Reserve a table</span>
            </h2>
            {/*<!-- Component: Card with form --> */}
            <form>
              {/*  <!-- Body--> */}
              <div className="p-6">
                <header className="mb-4 text-center"></header>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <Input
                    type="text"
                    id="reservation-date"
                    label="Date"
                    small="Please fill out the reservation date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <Input
                    type="text"
                    id="reservation-time"
                    label="Time"
                    small="Please fill out the reservation time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <Input
                    type="number"
                    id="reservation-guests"
                    label="Number of Guests"
                    small="Please fill out the number of guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="1"
                  />
                  <Input
                    type="
                        text"
                    id="reservation-occasion"
                    label="Occasion"
                    small="Please fill out the occasion"
                    value={occasion}
                    required={true}
                    onChange={(e) => setOccasion(e.target.value)}
                  />

                  <Input
                    type="text"
                    id="reservation-name"
                    label="Name"
                    small="Please fill out the reservation name"
                    required={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="email"
                    id="reservation-email"
                    label="Email"
                    required={true}
                    small="Please fill out the reservation email"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              {/*  <!-- Action base sized basic button --> */}
              <div className="flex justify-end p-6 ">
                <button
                  className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-yellow-500 px-5 text-sm font-medium tracking-wide text-black transition duration-300 hover:bg-yellow-600 focus:bg-yellow-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300 disabled:shadow-none"
                  onClick={() => alert('Reservation Successful')}
                >
                  <span>Confirm</span>
                </button>
              </div>
            </form>
            {/*<!-- End Card with form --> */}
          </div>
        </div>
      </div>
    </>
  );
}
