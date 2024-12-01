"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "../ui/navbar.css"; // Import the CSS file

export function NavbarDemo() {
  return (
    <div className="navbar-demo">
      <Navbar className="navbar-top" />
    </div>
  );
}

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={`navbar-container ${className}`}>
      <Menu setActive={setActive}>
        <div className="menu-oa">DoraHacks</div>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="menu-content">
            <HoveredLink href="https://dorahacks.io/hackathon/polkadot-2024-singapore">
              Web @Dora
            </HoveredLink>
            <HoveredLink href="https://dorahacks.io/hackathon/polkadot-2024-singapore">
              Interface Dora
            </HoveredLink>
            <HoveredLink href="https://dorahacks.io/hackathon/polkadot-2024-singapore">
              Dora hacks
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="product-grid">
            <ProductItem
              title="White Cat"
              href="https://dorahacks.io/hackathon/polkadot-2024-singapore"
              src="/assets/image1.jpg"
              description="Prepare for hackathons @dorahacks"
            />
            <ProductItem
              title="Black Cat"
              href="https://dorahacks.io/hackathon/polkadot-2024-singapore"
              src="/assets/image2.jpg"
              description="Production ready @dorahacks"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Hacks">
          <div className="product-grid">
            <ProductItem
              title="Black Cat"
              href="https://dorahacks.io/hackathon/polkadot-2024-singapore"
              src="/assets/image2.jpg"
              description="Prepare for hackathons @dorahacks"
            />
            <ProductItem
              title="White Cat"
              href="https://dorahacks.io/hackathon/polkadot-2024-singapore"
              src="/assets/image1.jpg"
              description="Production ready @dorahacks"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="menu-item">
      <motion.p transition={{ duration: 0.3 }} className="menu-title">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="submenu-container">
              <motion.div
                transition={transition}
                layoutId="active"
                className="submenu-box"
              >
                <motion.div layout className="submenu-content">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  let timeout: NodeJS.Timeout | null = null;

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setActive(null);
    }, 100);
  };

  const handleMouseEnter = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
  };

  return (
    <nav
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="menu-container"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="product-item">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="product-image"
      />
      <div>
        <h4 className="product-title">{title}</h4>
        <p className="product-description">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="hovered-link">
      {children}
    </Link>
  );
};
