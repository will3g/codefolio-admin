import Highlight from 'react-highlight'

export default function highlightCode() {
    const nodes = document.querySelectorAll("pre code");
    if (nodes.length > 0) {
        for (let i = 0; i < nodes.length; i = i + 1) {
            <Highlight className='json'>
                {nodes[i]}
            </Highlight>
        }
    }
}