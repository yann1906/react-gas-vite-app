import React from "react";
import { Container } from "react-bootstrap";
import CardExample from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";
import { useFetchData } from "../hooks/useFetchData";
import PageLayout from "../components/PageLayout";

const HomePage: React.FC = () => {
  let { data, loading } = useFetchData();

  return (
    <PageLayout>
      {loading ? (
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </Container>
      ) : (
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <CardExample object={data} />
          <CardExample object={data} />
          <CardExample object={data} />
        </Container>
      )}
    </PageLayout>
  );
};

export default HomePage;
