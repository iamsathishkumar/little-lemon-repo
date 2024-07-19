import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [guests,setGuests] = useState("");
    const [occasion,setOccasion] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return(
        <header>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)}
                            type="date" required></input>
                        </div>

                        {/* for time selection */}
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key=
                                        {availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>

                        {/* for guests selection */}
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-gests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                        </div>

                        {/* for occasion selection */}
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" key={occasion} onChange={e => setOccasion
                            (e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        {/* submit button  */}
                        <div className="btnReceive">
                            <input aria-label="on Click" type="submit" value={"Make Your Reservations"}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>

    )
}

export default BookingForm;