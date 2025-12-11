import { Counter } from '../components/Counter';
import { Button } from '../components/Button';

interface HomeProps {
    data?: string;
}

function Home({ data }: HomeProps) {
    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <h1>Welcome to LemonJS 🍋</h1>
            <p>This page is server-side rendered with React!</p>

            {data && (
                <div>
                    <strong>Welcome:</strong> {data}
                </div>
            )}

            <div style={{ marginBottom: '1rem' }}>
                <Button text="Server Button" />
            </div>

            <div>
                <h3>Interactive Client Component:</h3>
                <Counter initialCount={5} />
            </div>
        </div>
    );
}

// metadata for SEO
export const metadata = {
    title: 'Home - LemonJS Framework',
    description: 'Welcome to the LemonJS React SSR framework',
    ogTitle: 'LemonJS - Node.js React Framework',
    ogDescription: 'A lightweight Node.js framework with React SSR support',
};

export default Home;
