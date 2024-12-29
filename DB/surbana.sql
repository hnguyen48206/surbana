--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2 (Debian 17.2-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: building; Type: TABLE; Schema: public; Owner: hn162
--

CREATE TABLE public.building (
    building_code character varying(50) NOT NULL,
    building_name character varying(255) NOT NULL
);


ALTER TABLE public.building OWNER TO hn162;

--
-- Name: location; Type: TABLE; Schema: public; Owner: hn162
--

CREATE TABLE public.location (
    location_number character varying(255) NOT NULL,
    location_name character varying(255) NOT NULL,
    area numeric(10,2) NOT NULL,
    building_code character varying(50) NOT NULL
);


ALTER TABLE public.location OWNER TO hn162;

--
-- Data for Name: building; Type: TABLE DATA; Schema: public; Owner: hn162
--

COPY public.building (building_code, building_name) FROM stdin;
A	Building A
B	Building B
\.


--
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: hn162
--

COPY public.location (location_number, location_name, area, building_code) FROM stdin;
A-first_floor	First Floor	200.00	A
A-first_floor-meeting_room	Meeting Room	50.00	A
A-first_floor-meeting_room-pc_room	PC Room	50.00	A
\.


--
-- Name: building building_pkey; Type: CONSTRAINT; Schema: public; Owner: hn162
--

ALTER TABLE ONLY public.building
    ADD CONSTRAINT building_pkey PRIMARY KEY (building_code);


--
-- Name: location location_pkey; Type: CONSTRAINT; Schema: public; Owner: hn162
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (location_number);


--
-- Name: location location_building_code_fkey; Type: FK CONSTRAINT; Schema: public; Owner: hn162
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_building_code_fkey FOREIGN KEY (building_code) REFERENCES public.building(building_code);


--
-- PostgreSQL database dump complete
--

