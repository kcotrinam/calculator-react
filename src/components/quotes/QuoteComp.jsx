import Quote from '../shared/Quote';
import '../../scss/components/quote.scss';

const QUOTE = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston';

const QuoteComp = () => (
  <div className="quote-container">
    <Quote quote={QUOTE} />
  </div>
);

export default QuoteComp;
