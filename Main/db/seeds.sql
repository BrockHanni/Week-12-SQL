INSERT INTO department (DepartmentID, DepartmentName)
VALUES
  (1, 'Sales'),
  (2, 'Engineering'),
  (3, 'Finance'),
  (4, 'Legal');

INSERT INTO jobs (title, salary, DepartmentID)
VALUES
  ('Sales Manager', 80000, 1),
  ('Sales Representative', 50000, 1),
  ('Software Engineer', 75000, 2),
  ('Quality Assurance Engineer', 70000, 2),
  ('Financial Analyst', 60000, 3),
  ('Accountant', 55000, 3),
  ('Legal Counsel', 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Walker', 'Kessler', 1, 6),
  ('Lauri', 'Markkanen', 2, 1),
  ('Jordan', 'Clarkson', 3, 3),
  ('Collin', 'Sexton', 4, NULL),
  ('Ochai', 'Agbaji', 5, NULL),
  ('Kelly', 'Olynyk', 6, NULL),
  ('Kris', 'Dunn', 7, NULL),
  ('Simone', 'Fontecchio', 8, NULL);
