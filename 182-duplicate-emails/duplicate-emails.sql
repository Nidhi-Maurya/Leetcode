# Write your MySQL query statement below


SELECT  Email
 From Person
 GROUP BY Email 
HAVING COUNT(*) > 1;