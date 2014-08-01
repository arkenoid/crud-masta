package com.arkenoid.learn.repository;

import com.arkenoid.learn.domain.Foo;
        import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Foo entity.
 */
public interface FooRepository extends JpaRepository<Foo, Long> {

}
