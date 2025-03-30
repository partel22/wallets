import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-10 px-4 relative z-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">
              <span className="text-white">FAY</span>
              <span className="text-neutral-500">SECURE</span>
            </h2>
            <p className="text-neutral-400 text-sm mt-1">
              Secure blockchain transactions
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href=""
              target="_blank"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
          <p className="text-neutral-500 text-xs">
            © {currentYear} MetaSecure. All rights reserved.
          </p>
          <p className="text-neutral-500 text-xs">Built with Ethereum</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
