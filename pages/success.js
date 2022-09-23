import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { bsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { StateContext, useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const success = () => {
      const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
      const [order ,setOrder] = useState(null);

      useEffect(() => {
            localStorage.clear();
            setCartItems([]);
            setTotalPrice(0);
            setTotalQuantities(0);
            runFireworks();
      }, []);

      return (
            <div className='success-wrapper'>
                  <div className='success'>
                        <p className='icon'><bsBagCheckFill/></p>
                        <h2>Thank You for your Order!</h2>
                        <p className='email-msg'>Check your email inbox for the receipt.</p>
                        <p className='description'>If you have any questions, please email
                        <a className='email' href="mailto:order@example.com">order@example.com</a>
                        </p>
                        <Link href='/'>
                              <button type='button' width='300px' className='btn'>
                                    Continue Shopping
                              </button>
                        </Link>
                  </div>
            </div>
      )
}

export default success
