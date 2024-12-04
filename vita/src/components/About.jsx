import { useParams } from 'react-router-dom'

export const About = () => {
  const { valeur } = useParams();
  return <div>Ici Composant ABOUT {valeur && `- Paramètre: ${valeur}`}</div>
} 