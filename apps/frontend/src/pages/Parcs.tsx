import React, { Suspense, useEffect, useState } from 'react';
import ParcCard from '../components/Parc/ParcCard';
import styled from 'styled-components';
import ParcListTitle from '../components/Parc/Title';
import { Placeholder } from '../components/Placeholder';
import ErrorComponent from '../components/Error';
import { getRandomNumber } from '../utils';
import { useFetchParcs } from '../hooks/useFetchParks';

// Styled container for the cards
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Parcs = () => {
  const { parcs, parcsLoaded, error } = useFetchParcs();
  const [componentReady, setComponentReady] = useState<boolean>(false);

  useEffect(() => {
    const cachedParcs = JSON.parse(localStorage.getItem('parcs') || '[]');
    if (!componentReady) {
      if (cachedParcs.length || parcsLoaded) {
        setComponentReady(true);
      }
    }
  }, [parcsLoaded, componentReady]);

  return (
    <>
      {error ? (
        <ErrorComponent message={error} />
      ) : (
        <Suspense fallback={<Placeholder />}>
          {!componentReady ? null : (
            <>
              <ParcListTitle number={parcs.length} area="Alentejo" />
              <CardContainer>
                {/* Render your component using the parcs state */}
                {parcs.map(({ id, description, name }) => (
                  <ParcCard
                    key={id}
                    id={id}
                    description={description}
                    title={name}
                    image1Url={`https://picsum.photos/id/${getRandomNumber(
                      1,
                      80
                    )}/200/100`}
                    image2Url={`https://picsum.photos/id/${getRandomNumber(
                      1,
                      80
                    )}/200/100`}
                  />
                ))}
              </CardContainer>
            </>
          )}
        </Suspense>
      )}
    </>
  );
};
