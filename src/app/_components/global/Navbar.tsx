"use client"

import { Avatar, List, Popover } from 'antd';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className='h-20 m-5 rounded-xl bg-glass bg-blue-400/30'>
      <div className='px-4 md:px-10 w-full h-full flex items-center justify-between'>

        <h2 className='font-bold text-xl'>Lorem</h2>

          <Popover placement="bottomRight" title={""} overlayInnerStyle={{ padding: 0, boxShadow: "0px 0px 4px 0px #00000040" }} content={ProfileContent} trigger="click">
            <button className='flex items-center'>
              <Avatar src="/assets/images/avatar.png" className='w-10 h-10' />
              <span className='hidden md:block text-secondary px-2.5'>Ada Lovelace</span>
            </button>
          </Popover>

      </div>
    </header>
  );
};

const ProfileContent = () => {
  return (
    <List size="small" bordered={false}>
      <List.Item style={{ padding: 0 }}>
        <Link href={"/dashboard"} className='pl-5 pr-9 py-2.5 text-sub-text'>Dashboard</Link>
      </List.Item>
    </List>
  )
}


export default Navbar;