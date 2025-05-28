import { motion } from "framer-motion";

const name = "Hi, I'm Nelith";
const subtitle = "I like building things that work—and work well. Mostly fullstack apps";

const Hero = () => (
  <section className="hero" style={{ textAlign: "center" }}>
    <motion.h1
      style={{
        display: "inline-block",
        fontWeight: 700,
        letterSpacing: "0.01em",
        marginBottom: "0.5em"
      }}
      initial={{ opacity: 0, y: 30, letterSpacing: "0.2em" }}
      animate={{ opacity: 1, y: 0, letterSpacing: "0.01em" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {name}
    </motion.h1>
    <motion.p
      style={{
        color: "#B7C9E2",
        fontWeight: 400,
        fontSize: "1.25rem",
        marginTop: "0.5em"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
    >
      {subtitle}
    </motion.p>
  </section>
);

export default Hero;