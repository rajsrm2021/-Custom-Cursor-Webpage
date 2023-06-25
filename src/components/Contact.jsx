import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>contact us</h1>

            <form action="">
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label >Email</label>
                    <input type="email" required placeholder='abc@gmail.com'/>
                </div>
                <div>
                    <label >message</label>
                    <input type="text" required placeholder='Mention Your Query'/>
                </div>

                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact