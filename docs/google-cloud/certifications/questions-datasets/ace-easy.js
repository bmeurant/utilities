allQuizData = {
    "Associate Cloud Engineer - Easy": {
        "questions": [
            {
                "question": "Your company is setting up a new Google Cloud project for a highly sensitive application. You need to ensure that all resources deployed within this project automatically enforce data residency requirements by only allowing deployment in the europe-west1 region. Which of the following is the most effective and scalable way to enforce this policy?",
                "answerOptions": [
                    {"text": "A. Manually configure region restrictions for each service after deployment.", "isCorrect": false, "rationale": "This approach is not scalable or reliable. It is prone to human error and does not prevent resource creation outside the desired region."},
                    {"text": "B. Create a custom IAM role that restricts resource creation to europe-west1.", "isCorrect": false, "rationale": "IAM roles define who can perform an action, not what the action can do. An IAM role cannot enforce a specific location for resource creation."},
                    {"text": "C. Use an Organization Policy to create a 'Resource Location Restriction' constraint.", "isCorrect": true, "rationale": "Organization Policies are designed to enforce constraints across an entire resource hierarchy (organization, folder, or project). The 'Resource Location Restriction' constraint is specifically used to restrict resource locations, making it the most effective and scalable way to enforce data residency requirements."},
                    {"text": "D. Configure firewall rules to block traffic from outside europe-west1.", "isCorrect": false, "rationale": "Firewall rules control network traffic, not the location of resource creation. This would not prevent a resource from being created in a different region."}
                ]
            },
            {
                "question": "A development team needs to deploy a containerized application to Google Cloud. They require a fully managed platform that allows rapid deployments, scales automatically based on traffic (including scaling to zero), and supports custom domains and HTTPS without manual certificate management. Which Google Cloud service is the best fit?",
                "answerOptions": [
                    {"text": "A. Compute Engine", "isCorrect": false, "rationale": "Compute Engine is an IaaS offering, requiring manual management of servers, autoscaling, and certificates."},
                    {"text": "B. Google Kubernetes Engine (GKE)", "isCorrect": false, "rationale": "GKE requires more management overhead to configure autoscaling and ingress with certificate management compared to Cloud Run for this use case."},
                    {"text": "C. Cloud Run", "isCorrect": true, "rationale": "Cloud Run is a fully managed, serverless platform for containerized applications that scales automatically from zero and provides built-in custom domain and certificate management."},
                    {"text": "D. App Engine Flexible Environment", "isCorrect": false, "rationale": "While App Engine can run containers, Cloud Run is more optimized for serverless, event-driven, and scale-to-zero workloads."}
                ]
            },
            {
                "question": "You are designing a data analytics pipeline. Raw data arrives in CSV files in a Cloud Storage bucket. You need a serverless service to automatically process these files, transform them, and load them into BigQuery for analysis. Which Google Cloud service should you use to trigger the processing when new files arrive?",
                "answerOptions": [
                    {"text": "A. Cloud Dataflow", "isCorrect": false, "rationale": "Cloud Dataflow is a data processing service, but it needs to be triggered by another service. It is not an event-driven trigger itself."},
                    {"text": "B. Cloud Functions", "isCorrect": true, "rationale": "Cloud Functions is the correct choice. It is an event-driven, serverless compute service that can be triggered directly by events, such as a new file being created in a Cloud Storage bucket."},
                    {"text": "C. Cloud Pub/Sub", "isCorrect": false, "rationale": "Cloud Pub/Sub is a messaging service. It can be used to send event notifications, but it does not process the files itself."},
                    {"text": "D. Cloud Composer", "isCorrect": false, "rationale": "Cloud Composer is an orchestration service for workflows (based on Apache Airflow), which can be used to manage complex pipelines, but Cloud Functions is the simplest and most direct way to trigger a process based on a single event."}
                ]
            },
            {
                "question": "Your application requires a highly available, relational database that supports standard SQL and automatically handles replication, patching, and backups. You prefer a fully managed service to minimize operational overhead. Which Google Cloud service meets these requirements?",
                "answerOptions": [
                    {"text": "A. Compute Engine with PostgreSQL installed", "isCorrect": false, "rationale": "This is a self-managed solution. You would be responsible for replication, patching, backups, and other administrative tasks."},
                    {"text": "B. Cloud Spanner", "isCorrect": false, "rationale": "Cloud Spanner is a globally distributed, relational database. While it meets the requirements, Cloud SQL is the simpler and more cost-effective option for a regional, fully managed relational database."},
                    {"text": "C. Cloud SQL", "isCorrect": true, "rationale": "Cloud SQL is the correct choice. It is a fully managed database service for MySQL, PostgreSQL, and SQL Server that automatically handles common administrative tasks like patching, replication, and backups."},
                    {"text": "D. Cloud Bigtable", "isCorrect": false, "rationale": "Cloud Bigtable is a NoSQL, wide-column database. It does not support standard SQL queries."}
                ]
            },
            {
                "question": "You need to migrate an existing web application running on an on-premises Linux server with a MySQL database to Google Cloud. The application architecture should remain largely unchanged, and you want to minimize refactoring. Which Google Cloud compute and database services combination would you recommend?",
                "answerOptions": [
                    {"text": "A. App Engine Standard and Cloud Firestore", "isCorrect": false, "rationale": "This combination would require significant refactoring of the application, as App Engine has specific runtime environments and Firestore is a NoSQL database."},
                    {"text": "B. Cloud Run and Cloud Spanner", "isCorrect": false, "rationale": "This is an architecture for modern, microservice-based applications and globally distributed databases, which would require a complete re-architecture."},
                    {"text": "C. Compute Engine (Linux VM) and Cloud SQL for MySQL", "isCorrect": true, "rationale": "This is a classic 'lift-and-shift' migration approach. Compute Engine provides the IaaS flexibility to run the existing Linux VM, and Cloud SQL for MySQL is a fully managed, compatible service for the existing database."},
                    {"text": "D. Google Kubernetes Engine and Cloud Bigtable", "isCorrect": false, "rationale": "This would also require a re-architecture to containerize the application and change the database to NoSQL."}
                ]
            },
            {
                "question": "Your company needs to store large archives of historical data (petabytes) that are accessed very rarely (less than once a year) but must be retained for compliance purposes. The primary goal is to minimize storage costs. Which Cloud Storage class is most appropriate?",
                "answerOptions": [
                    {"text": "A. Standard", "isCorrect": false, "rationale": "Standard is for frequently accessed data."},
                    {"text": "B. Nearline", "isCorrect": false, "rationale": "Nearline is for data accessed less than once a month."},
                    {"text": "C. Coldline", "isCorrect": false, "rationale": "Coldline is for data accessed less than once a quarter."},
                    {"text": "D. Archive", "isCorrect": true, "rationale": "Archive is the lowest-cost storage class, specifically designed for long-term archiving and disaster recovery, where data access is rare (less than once a year)."}
                ]
            },
            {
                "question": "You are setting up a VPC network for your Google Cloud project. You want to ensure that all virtual machines in a specific subnet can access the internet, but external instances cannot initiate connections to them. Which network configuration should you use?",
                "answerOptions": [
                    {"text": "A. Apply an ingress firewall rule allowing all traffic.", "isCorrect": false, "rationale": "This is the opposite of the requirement, as it would allow inbound connections."},
                    {"text": "B. Assign public IP addresses to all VMs and use no egress rule.", "isCorrect": false, "rationale": "This would expose the VMs to the public internet, allowing inbound connections."},
                    {"text": "C. Use Cloud NAT (Network Address Translation) for the subnet.", "isCorrect": true, "rationale": "Cloud NAT allows instances without public IP addresses to initiate outbound connections to the internet. Since they don't have a public IP, inbound connections from the internet are not possible."},
                    {"text": "D. Peer the VPC with another network that has internet access.", "isCorrect": false, "rationale": "This would provide connectivity to another VPC, not necessarily the public internet, and doesn't inherently prevent inbound connections."}
                ]
            },
            {
                "question": "A new employee joins your team and needs permission to view all resources in a Google Cloud project but should not be able to modify or delete anything. Which IAM predefined role should you assign to this employee at the project level?",
                "answerOptions": [
                    {"text": "A. Editor", "isCorrect": false, "rationale": "This role is too permissive, as it allows read and write access to all resources."},
                    {"text": "B. Viewer", "isCorrect": true, "rationale": "Viewer is the correct role. This predefined role grants read-only access to all resources within a project, adhering to the principle of least privilege."},
                    {"text": "C. Owner", "isCorrect": false, "rationale": "This is the most permissive role, granting full administrative access, including the ability to manage other IAM roles and billing."},
                    {"text": "D. Project IAM Admin", "isCorrect": false, "rationale": "This role grants permissions to manage IAM roles, not to view or manage the resources themselves."}
                ]
            },
            {
                "question": "You need to transfer 50 TB of data from an on-premises data center to Cloud Storage. Your internet connection is slow and unreliable. What is the most efficient and reliable method to perform this large-scale data transfer to Google Cloud?",
                "answerOptions": [
                    {"text": "A. Use `gsutil cp` over the internet.", "isCorrect": false, "rationale": "This method would be extremely slow and unreliable for a 50 TB transfer over a poor internet connection."},
                    {"text": "B. Send the data via a Cloud VPN connection.", "isCorrect": false, "rationale": "While a VPN is more secure, it still relies on the internet connection and would be slow and unreliable in this scenario."},
                    {"text": "C. Order a Transfer Appliance from Google.", "isCorrect": true, "rationale": "The Transfer Appliance is a physical device shipped to your data center. You load the data onto the device and ship it back to Google, who then uploads it to Cloud Storage. It's the most efficient method for large-scale transfers with limited bandwidth."},
                    {"text": "D. Use Storage Transfer Service for online migration.", "isCorrect": false, "rationale": "This service is for online transfers, but its performance is still dependent on the available network bandwidth."}
                ]
            },
            {
                "question": "Your company requires a dedicated, private, and high-bandwidth connection between its on-premises data center and Google Cloud VPC network, ensuring data does not traverse the public internet. Which Google Cloud networking product is designed for this purpose?",
                "answerOptions": [
                    {"text": "A. Cloud VPN", "isCorrect": false, "rationale": "Cloud VPN creates an encrypted connection over the public internet, which does not meet the 'private connection' requirement."},
                    {"text": "B. Shared VPC", "isCorrect": false, "rationale": "Shared VPC is for sharing a VPC across multiple projects within Google Cloud, not for on-premises connectivity."},
                    {"text": "C. Dedicated Interconnect", "isCorrect": true, "rationale": "Dedicated Interconnect provides a physical, private connection with high bandwidth between your on-premises network and Google's network, bypassing the public internet entirely."},
                    {"text": "D. Cloud CDN", "isCorrect": false, "rationale": "Cloud CDN is a content delivery network used for caching and serving web content, not for hybrid connectivity."}
                ]
            },
            {
                "question": "You have a web application running on Compute Engine instances that are behind a global external HTTP(S) Load Balancer. You need to ensure that the load balancer only sends traffic to instances that are healthy and responsive. Which feature of the load balancer accomplishes this?",
                "answerOptions": [
                    {"text": "A. Session affinity", "isCorrect": false, "rationale": "Session affinity ensures a user's requests are sent to the same backend instance, but it does not check the instance's health."},
                    {"text": "B. Autoscaling", "isCorrect": false, "rationale": "Autoscaling adjusts the number of instances in a group but does not directly check the health of individual instances."},
                    {"text": "C. Health checks", "isCorrect": true, "rationale": "Health checks periodically probe the backend instances to determine if they are healthy and responsive. The load balancer will only send traffic to instances that pass these checks."},
                    {"text": "D. CDN integration", "isCorrect": false, "rationale": "CDN integration enables caching, which is unrelated to checking the health of backend instances."}
                ]
            },
            {
                "question": "Your organization has multiple Google Cloud projects, and you want to centralize network management, including IP address allocation and firewall rules, across these projects. Which Google Cloud networking feature should you implement?",
                "answerOptions": [
                    {"text": "A. VPC Network Peering", "isCorrect": false, "rationale": "VPC Network Peering allows two VPCs to communicate with each other using internal IP addresses, but it does not centralize network management."},
                    {"text": "B. Shared VPC", "isCorrect": true, "rationale": "Shared VPC allows you to designate a 'host' project from which network resources (subnets, routes, firewalls) can be shared with 'service' projects. This centralizes network administration."},
                    {"text": "C. Cloud VPN", "isCorrect": false, "rationale": "Cloud VPN is for connecting a VPC to another network, typically on-premises."},
                    {"text": "D. Cloud Router", "isCorrect": false, "rationale": "Cloud Router is a service that provides BGP routing, but it doesn't centralize network management across projects."}
                ]
            },
            {
                "question": "You are deploying a highly available application using Compute Engine instances. You need to ensure that if an instance becomes unresponsive, it is automatically replaced. Which Compute Engine feature or service enables this auto-healing capability?",
                "answerOptions": [
                    {"text": "A. Preemptible VMs", "isCorrect": false, "rationale": "Preemptible VMs are instances that can be shut down at any time by Google, which is the opposite of the high availability and auto-healing requirement."},
                    {"text": "B. Custom machine types", "isCorrect": false, "rationale": "Custom machine types allow you to customize the CPU and memory of an instance, but do not provide auto-healing."},
                    {"text": "C. Managed Instance Groups (MIGs) with health checks", "isCorrect": true, "rationale": "A MIG uses a health check to monitor its instances. If an instance fails the health check, the MIG will automatically replace it to maintain the desired group size, providing auto-healing."},
                    {"text": "D. Sole-tenant nodes", "isCorrect": false, "rationale": "Sole-tenant nodes are dedicated physical servers for a single customer and do not provide auto-healing."}
                ]
            },
            {
                "question": "A new microservice needs to be deployed that processes messages from a Pub/Sub topic. The service should be highly scalable, fully managed, and only consume resources when messages are available. Which Google Cloud compute service is best suited for this event-driven architecture?",
                "answerOptions": [
                    {"text": "A. Compute Engine", "isCorrect": false, "rationale": "Compute Engine is an IaaS solution that requires management and does not scale to zero automatically."},
                    {"text": "B. App Engine Flexible Environment", "isCorrect": false, "rationale": "App Engine Flexible is a PaaS, but Cloud Functions is a more lightweight and cost-effective solution specifically designed for event-driven, short-lived workloads."},
                    {"text": "C. Cloud Functions", "isCorrect": true, "rationale": "Cloud Functions is the correct choice. It is a serverless, event-driven compute service that can be directly triggered by a Pub/Sub message. It scales automatically and down to zero, and you only pay for the time the function is running."},
                    {"text": "D. Google Kubernetes Engine (GKE)", "isCorrect": false, "rationale": "GKE is a container orchestrator. While it can be configured for event-driven workloads, it is a more complex solution than Cloud Functions for this specific, simple use case."}
                ]
            },
            {
                "question": "You are building an e-commerce application that requires a database with strong consistency, high availability, and global scalability, capable of handling millions of transactions per second. Your data is relational, and you need SQL queries. Which Google Cloud database service is designed for this use case?",
                "answerOptions": [
                    {"text": "A. Cloud SQL", "isCorrect": false, "rationale": "Cloud SQL is a regional relational database and does not offer global, horizontal scalability."},
                    {"text": "B. Cloud Firestore", "isCorrect": false, "rationale": "Cloud Firestore is a NoSQL document database and does not support standard SQL."},
                    {"text": "C. Cloud Spanner", "isCorrect": true, "rationale": "Cloud Spanner is the correct choice. It is a globally distributed, highly consistent, and highly available relational database service that supports standard SQL and is designed for mission-critical applications at a global scale."},
                    {"text": "D. Cloud Bigtable", "isCorrect": false, "rationale": "Cloud Bigtable is a NoSQL, wide-column database optimized for high-throughput reads and writes and does not support standard SQL."}
                ]
            },
            {
                "question": "You need to analyze vast amounts of semi-structured data (e.g., JSON logs) in a serverless and cost-effective manner using standard SQL queries. The data volume is in the petabytes, and you don't want to manage any infrastructure. Which Google Cloud service should you choose?",
                "answerOptions": [
                    {"text": "A. Cloud SQL", "isCorrect": false, "rationale": "Cloud SQL is a transactional database, not a serverless data warehouse for petabytes of data."},
                    {"text": "B. Cloud Bigtable", "isCorrect": false, "rationale": "Cloud Bigtable is a NoSQL database, not designed for ad-hoc SQL analytics."},
                    {"text": "C. BigQuery", "isCorrect": true, "rationale": "BigQuery is the correct choice. It is a serverless, highly scalable, and cost-effective enterprise data warehouse that supports standard SQL and can analyze petabytes of data without managing any infrastructure."},
                    {"text": "D. Cloud Storage", "isCorrect": false, "rationale": "Cloud Storage is an object storage service and does not provide built-in SQL query capabilities."}
                ]
            },
            {
                "question": "Your application is experiencing performance issues due to slow database queries. You want to implement a caching layer to reduce the load on your primary database and speed up data retrieval. Which Google Cloud service provides a fully managed in-memory data store for caching?",
                "answerOptions": [
                    {"text": "A. Cloud Storage", "isCorrect": false, "rationale": "Cloud Storage is a long-term object storage service, not an in-memory data store for caching."},
                    {"text": "B. Cloud SQL", "isCorrect": false, "rationale": "Cloud SQL is a primary database, not a caching layer. The goal is to offload queries from this service."},
                    {"text": "C. Memorystore", "isCorrect": true, "rationale": "Memorystore is the correct choice. It is a fully managed in-memory data store service compatible with Redis and Memcached, designed for use as a high-performance caching layer."},
                    {"text": "D. Cloud Bigtable", "isCorrect": false, "rationale": "Cloud Bigtable is a high-performance NoSQL database for large analytical and operational workloads, not typically used as a simple caching layer."}
                ]
            },
            {
                "question": "You need to collect logs from various sources across your Google Cloud environment (Compute Engine, App Engine, Cloud Functions) and centralize them for analysis, search, and export. Which Google Cloud service should you use?",
                "answerOptions": [
                    {"text": "A. Cloud Monitoring", "isCorrect": false, "rationale": "Cloud Monitoring collects metrics (e.g., CPU, memory), not log entries."},
                    {"text": "B. Cloud Trace", "isCorrect": false, "rationale": "Cloud Trace is for analyzing latency in distributed applications."},
                    {"text": "C. Cloud Audit Logs", "isCorrect": false, "rationale": "Cloud Audit Logs specifically captures API calls and administrative actions, but not application logs (like 'stdout' and 'stderr')."},
                    {"text": "D. Cloud Logging", "isCorrect": true, "rationale": "Cloud Logging is the correct choice. It is a fully managed service that collects, stores, and analyzes log data from all Google Cloud services."}
                ]
            },
            {
                "question": "Your team wants to implement continuous deployment for your Google Kubernetes Engine (GKE) applications. You need a service that can automatically build container images from source code, store them, and deploy them to GKE upon code changes. Which Google Cloud services would be part of this CI/CD pipeline?",
                "answerOptions": [
                    {"text": "A. Cloud Build, Container Registry, GKE", "isCorrect": true, "rationale": "This combination forms a standard CI/CD pipeline on Google Cloud. Cloud Build automates the build process from source code, Container Registry stores the resulting image, and GKE is the target platform for deploying the application."},
                    {"text": "B. Cloud Functions, Cloud SQL, Cloud Storage", "isCorrect": false, "rationale": "These services are for serverless compute, databases, and storage respectively, and are not part of a standard container CI/CD pipeline."},
                    {"text": "C. Cloud Dataflow, BigQuery, Looker Studio", "isCorrect": false, "rationale": "These services are for data processing and business intelligence."},
                    {"text": "D. Cloud CDN, Cloud Load Balancing, Cloud Armor", "isCorrect": false, "rationale": "These services are for networking and security, not for building and deploying applications."}
                ]
            },
            {
                "question": "You need to monitor the performance of your Compute Engine instances, track CPU utilization, memory usage, and network traffic, and set up custom dashboards and alerts. Which Google Cloud service is designed for this purpose?",
                "answerOptions": [
                    {"text": "A. Cloud Logging", "isCorrect": false, "rationale": "Cloud Logging is for collecting logs, not performance metrics."},
                    {"text": "B. Cloud Trace", "isCorrect": false, "rationale": "Cloud Trace is for latency analysis in distributed applications."},
                    {"text": "C. Cloud Monitoring", "isCorrect": true, "rationale": "Cloud Monitoring is the correct service. It is a comprehensive monitoring service that collects metrics, provides dashboards, and allows you to set up alerts based on various resource metrics (CPU, memory, etc.)."},
                    {"text": "D. Cloud Audit Logs", "isCorrect": false, "rationale": "Cloud Audit Logs tracks administrative actions and API calls."}
                ]
            },
            {
                "question": "Your company wants to migrate an existing Hadoop cluster from on-premises to a fully managed, scalable service on Google Cloud. You need to run Apache Spark and Hadoop MapReduce jobs without managing individual servers. Which Google Cloud service should you use?",
                "answerOptions": [
                    {"text": "A. Compute Engine", "isCorrect": false, "rationale": "Compute Engine would require you to manually install and manage Hadoop on VMs."},
                    {"text": "B. Cloud Dataflow", "isCorrect": false, "rationale": "Cloud Dataflow is a data processing service using Apache Beam, not for a direct lift-and-shift of a Hadoop/Spark cluster."},
                    {"text": "C. Dataproc", "isCorrect": true, "rationale": "Dataproc is the correct choice. It is a fully managed service for running Apache Spark, Hadoop, Presto, and other open-source data analytics frameworks."},
                    {"text": "D. BigQuery", "isCorrect": false, "rationale": "BigQuery is a data warehouse and not a platform for running general-purpose Hadoop/Spark jobs."}
                ]
            },
            {
                "question": "You need to grant a service account the minimum necessary permissions to read objects from a specific Cloud Storage bucket. Which predefined IAM role should you assign to the service account?",
                "answerOptions": [
                    {"text": "A. roles/storage.admin", "isCorrect": false, "rationale": "This role is too permissive, as it grants full control over the bucket."},
                    {"text": "B. roles/storage.objectViewer", "isCorrect": true, "rationale": "roles/storage.objectViewer is the correct role. It grants read-only access to objects within a bucket, adhering to the principle of least privilege."},
                    {"text": "C. roles/storage.objectCreator", "isCorrect": false, "rationale": "This role allows creating objects, not just viewing them."},
                    {"text": "D. roles/viewer", "isCorrect": false, "rationale": "This is a project-level role that grants read-only access to all resources in a project, which is more access than is needed for a single bucket."}
                ]
            },
            {
                "question": "You've deployed a new version of your web application on App Engine. You want to test this new version with a small percentage of your users (e.g., 5%) before rolling it out to everyone. Which App Engine feature allows you to control traffic distribution between different versions?",
                "answerOptions": [
                    {"text": "A. Instance scaling settings", "isCorrect": false, "rationale": "This controls the number of instances, not the distribution of traffic between versions."},
                    {"text": "B. Traffic splitting", "isCorrect": true, "rationale": "Traffic splitting allows you to split incoming traffic between different versions of your application based on a percentage, IP address, or cookie, which is ideal for canary testing."},
                    {"text": "C. Firewall rules", "isCorrect": false, "rationale": "Firewall rules control network access to the application, not version distribution."},
                    {"text": "D. Health checks", "isCorrect": false, "rationale": "Health checks are used to determine if an instance is healthy, not for traffic routing."}
                ]
            },
            {
                "question": "Your team needs to securely store sensitive API keys and database credentials for your application. These secrets need to be versioned, have fine-grained access control, and be auditable. Which Google Cloud service is designed for managing secrets?",
                "answerOptions": [
                    {"text": "A. Cloud Storage", "isCorrect": false, "rationale": "Cloud Storage can store files, but it is not a dedicated secrets management service with features like versioning and fine-grained access control."},
                    {"text": "B. Cloud Key Management Service (KMS)", "isCorrect": false, "rationale": "Cloud KMS manages cryptographic keys, but not secrets like API keys or passwords."},
                    {"text": "C. Secret Manager", "isCorrect": true, "rationale": "Secret Manager is the correct service. It is a dedicated, fully managed service for storing, managing, and accessing secrets with features like versioning, access control, and audit logs."},
                    {"text": "D. Environment variables on VMs", "isCorrect": false, "rationale": "This is an insecure method for storing secrets."}
                ]
            },
            {
                "question": "You are responsible for ensuring your Google Cloud environment is compliant with industry standards. You need to review all administrative activities and data access events across your projects to detect suspicious behavior. Which Google Cloud service provides these audit logs?",
                "answerOptions": [
                    {"text": "A. Cloud Logging", "isCorrect": false, "rationale": "Cloud Logging collects general logs, but Cloud Audit Logs is a specific subset of logs for auditing."},
                    {"text": "B. Cloud Monitoring", "isCorrect": false, "rationale": "Cloud Monitoring collects metrics."},
                    {"text": "C. Cloud Audit Logs", "isCorrect": true, "rationale": "Cloud Audit Logs is the correct service. It records administrative actions and data access events for auditing and compliance purposes."},
                    {"text": "D. VPC Flow Logs", "isCorrect": false, "rationale": "VPC Flow Logs record network traffic flows."}
                ]
            },
            {
                "question": "Your organization needs to create a custom VPC network that spans multiple regions and has specific subnet IP ranges for different environments (e.g., development, staging, production). Which type of VPC network should you create?",
                "answerOptions": [
                    {"text": "A. Auto mode network", "isCorrect": false, "rationale": "An auto mode network automatically creates a subnet in each new region with predefined IP ranges, which doesn't allow for custom ranges."},
                    {"text": "B. Default network", "isCorrect": false, "rationale": "The default network is an auto mode network with a set of pre-populated subnets and firewall rules."},
                    {"text": "C. Custom mode network", "isCorrect": true, "rationale": "A custom mode network gives you full control over subnet creation, allowing you to create subnets in specific regions with custom IP address ranges."},
                    {"text": "D. Legacy network", "isCorrect": false, "rationale": "This is an older, deprecated network type."}
                ]
            },
            {
                "question": "You want to provision and manage your Google Cloud infrastructure using declarative configuration files rather than manual console operations or imperative scripts. Which Google Cloud infrastructure as code service is the native solution for this?",
                "answerOptions": [
                    {"text": "A. Terraform", "isCorrect": false, "rationale": "Terraform is a popular third-party tool for infrastructure as code, not a native Google Cloud service."},
                    {"text": "B. Cloud Build", "isCorrect": false, "rationale": "Cloud Build is a CI/CD service, not an IaC tool."},
                    {"text": "C. Cloud Deployment Manager", "isCorrect": true, "rationale": "Cloud Deployment Manager is the native Google Cloud service for creating and managing resources using declarative configuration files (YAML)."},
                    {"text": "D. Chef/Puppet", "isCorrect": false, "rationale": "These are configuration management tools, not specifically for provisioning cloud infrastructure."}
                ]
            },
            {
                "question": "An application is designed to store user-generated content (images, videos) that needs to be accessible globally with high durability and availability. The content is accessed frequently. Which Google Cloud storage service is ideal for this use case?",
                "answerOptions": [
                    {"text": "A. Persistent Disk", "isCorrect": false, "rationale": "Persistent Disk is block storage attached to a single VM, not suitable for globally accessible user content."},
                    {"text": "B. Cloud SQL", "isCorrect": false, "rationale": "Cloud SQL is a relational database. It is not designed for storing large binary objects like images and videos."},
                    {"text": "C. Cloud Storage (Standard storage class)", "isCorrect": true, "rationale": "Cloud Storage is a durable, highly available object storage service with a global namespace, making it ideal for storing and serving frequently accessed static content like user-generated media."},
                    {"text": "D. Filestore", "isCorrect": false, "rationale": "Filestore is a managed NFS file storage service, which is not designed for global content serving."}
                ]
            },
            {
                "question": "You need to process large batches of data (terabytes) using a serverless, unified programming model (Apache Beam). The processing should be fully managed, automatically scale, and handle failures gracefully. Which Google Cloud service is best suited?",
                "answerOptions": [
                    {"text": "A. Dataproc", "isCorrect": false, "rationale": "Dataproc is for managing Hadoop/Spark clusters, not for serverless Apache Beam pipelines."},
                    {"text": "B. Cloud Functions", "isCorrect": false, "rationale": "Cloud Functions is for event-driven, short-lived functions, not for large-scale batch processing."},
                    {"text": "C. Cloud Dataflow", "isCorrect": true, "rationale": "Cloud Dataflow is the correct choice. It is a fully managed, serverless service for running Apache Beam pipelines. It automatically scales and manages resources for both batch and stream processing jobs."},
                    {"text": "D. Compute Engine", "isCorrect": false, "rationale": "Compute Engine is an IaaS solution that would require manual management of the processing cluster."}
                ]
            },
            {
                "question": "Your Compute Engine instances need to securely and privately access Google APIs (like Cloud Storage or BigQuery) without using external IP addresses or traversing the public internet. Which Google Cloud networking feature enables this?",
                "answerOptions": [
                    {"text": "A. Cloud VPN", "isCorrect": false, "rationale": "Cloud VPN is for connecting a VPC to another network, not for accessing Google APIs internally."},
                    {"text": "B. Cloud NAT", "isCorrect": false, "rationale": "Cloud NAT allows instances without public IP addresses to access the internet, but the traffic still goes over public routes."},
                    {"text": "C. Private Google Access", "isCorrect": true, "rationale": "Private Google Access is the correct feature. It allows instances in a subnet with only internal IP addresses to access Google APIs and services using the private network, without using external IP addresses or routing through the public internet."},
                    {"text": "D. VPC Network Peering", "isCorrect": false, "rationale": "VPC Network Peering allows communication between two VPCs."}
                ]
            },
            {
                "question": "You are troubleshooting a latency issue in your microservices application. You need to visualize the end-to-end flow of requests across different services, identify bottlenecks, and see where time is being spent. Which Google Cloud service provides this capability?",
                "answerOptions": [
                    {"text": "A. Cloud Logging", "isCorrect": false, "rationale": "Cloud Logging provides log entries, not a visual representation of request flow."},
                    {"text": "B. Cloud Monitoring", "isCorrect": false, "rationale": "Cloud Monitoring provides metrics, not end-to-end request tracing."},
                    {"text": "C. Cloud Trace", "isCorrect": true, "rationale": "Cloud Trace is a distributed tracing system that helps you visualize the flow of requests and identify performance bottlenecks across your application's services."},
                    {"text": "D. Cloud Profiler", "isCorrect": false, "rationale": "Cloud Profiler is for analyzing CPU and memory usage in specific applications, not for end-to-end request tracing."}
                ]
            },
            {
                "question": "Your company wants to create a shared file system that can be simultaneously mounted by multiple Compute Engine instances for use cases like shared storage for content management systems or developer home directories. Which Google Cloud service provides managed NFS file storage?",
                "answerOptions": [
                    {"text": "A. Cloud Storage", "isCorrect": false, "rationale": "Cloud Storage is object storage and does not provide a POSIX-compliant file system that can be mounted by multiple instances simultaneously."},
                    {"text": "B. Persistent Disk", "isCorrect": false, "rationale": "Persistent Disk is block storage that can only be mounted in read/write mode to a single instance at a time (or read-only to multiple instances)."},
                    {"text": "C. Filestore", "isCorrect": true, "rationale": "Filestore is a fully managed, high-performance file storage service (NFS) that can be simultaneously mounted to multiple Compute Engine instances."},
                    {"text": "D. Cloud Memorystore", "isCorrect": false, "rationale": "Cloud Memorystore is an in-memory data store for caching."}
                ]
            },
            {
                "question": "You need to create an SSH key pair to connect to a new Compute Engine instance. What is the most common and recommended command-line tool to generate this key pair on a Linux/macOS machine?",
                "answerOptions": [
                    {"text": "A. `gcloud compute ssh`", "isCorrect": false, "rationale": "`gcloud compute ssh` is used to connect to a VM and can generate a key pair for you, but `ssh-keygen` is the standard tool for generating key pairs."},
                    {"text": "B. `ssh-keygen`", "isCorrect": true, "rationale": "`ssh-keygen` is the correct tool. It is the standard, native command-line utility on Linux and macOS for generating SSH key pairs."},
                    {"text": "C. `openssl genrsa`", "isCorrect": false, "rationale": "`openssl genrsa` can generate RSA keys, but `ssh-keygen` is the tool specifically for SSH key pairs."},
                    {"text": "D. `gcloud auth login`", "isCorrect": false, "rationale": "`gcloud auth login` is for authenticating your `gcloud` command-line tool with your Google account."}
                ]
            },
            {
                "question": "Your team wants to deploy a stateless web application that needs to scale very rapidly and cost-effectively from zero instances to handle spikes in traffic. You prefer to package your application as a Docker container. Which Google Cloud service is the best fit?",
                "answerOptions": [
                    {"text": "A. Compute Engine", "isCorrect": false, "rationale": "Compute Engine requires manual server management and does not scale to zero."},
                    {"text": "B. App Engine Standard", "isCorrect": false, "rationale": "App Engine Standard is also serverless but has limited language support compared to Cloud Run's container-based approach."},
                    {"text": "C. Google Kubernetes Engine (GKE)", "isCorrect": false, "rationale": "GKE is a container orchestrator but is more complex and not designed to scale to zero as efficiently as Cloud Run for stateless workloads."},
                    {"text": "D. Cloud Run", "isCorrect": true, "rationale": "Cloud Run is the correct choice. It is a fully managed, serverless platform for containerized applications that scales automatically and rapidly from zero to many instances based on traffic."}
                ]
            },
            {
                "question": "You need to schedule a daily batch job to run a Python script on a Compute Engine instance at 2 AM every day. The job should start the instance, run the script, and then stop the instance. Which Google Cloud services can be used in combination to achieve this automation?",
                "answerOptions": [
                    {"text": "A. Cloud Logging and Cloud Monitoring", "isCorrect": false, "rationale": "These services are for observing and alerting, not for scheduling jobs."},
                    {"text": "B. Cloud Scheduler and Cloud Functions", "isCorrect": true, "rationale": "Cloud Scheduler is used to trigger a job on a cron schedule. It can trigger a Cloud Function, which in turn can use the 'gcloud' command-line tools to start the Compute Engine instance, run the script, and then stop the instance."},
                    {"text": "C. Cloud Build and Container Registry", "isCorrect": false, "rationale": "These services are for building and storing container images."},
                    {"text": "D. Dataproc and BigQuery", "isCorrect": false, "rationale": "These services are for data processing and warehousing."}
                ]
            },
            {
                "question": "A new security policy requires that all external HTTP(S) traffic to your web application, which is behind a Google Cloud Load Balancer, must be inspected for common web vulnerabilities (e.g., SQL injection, cross-site scripting). Which Google Cloud service provides Web Application Firewall (WAF) capabilities for this purpose?",
                "answerOptions": [
                    {"text": "A. Cloud VPN", "isCorrect": false, "rationale": "Cloud VPN is for hybrid connectivity."},
                    {"text": "B. Cloud Armor", "isCorrect": true, "rationale": "Cloud Armor is the correct service. It is a security service that provides WAF capabilities, DDoS protection, and IP-based access control policies for applications behind a Google Cloud Load Balancer."},
                    {"text": "C. Cloud DNS", "isCorrect": false, "rationale": "Cloud DNS is a managed DNS service."},
                    {"text": "D. Cloud CDN", "isCorrect": false, "rationale": "Cloud CDN is for content caching."}
                ]
            },
            {
                "question": "You want to implement a disaster recovery plan for your critical Compute Engine application. This plan includes creating automated, scheduled backups of your persistent disks that are stored in a different region. Which Compute Engine feature enables this?",
                "answerOptions": [
                    {"text": "A. Live Migration", "isCorrect": false, "rationale": "Live Migration is for moving a running VM, not for backups."},
                    {"text": "B. Managed Instance Groups", "isCorrect": false, "rationale": "Managed Instance Groups provide auto-healing and autoscaling within a region, but not cross-regional backups."},
                    {"text": "C. Persistent Disk snapshots", "isCorrect": true, "rationale": "Persistent Disk snapshots are point-in-time backups of a persistent disk. They are incremental, stored globally, and can be used to restore a disk in any zone, including a different region."},
                    {"text": "D. Custom images", "isCorrect": false, "rationale": "Custom images are templates for creating new instances, not backups of existing disks."}
                ]
            },
            {
                "question": "Your application needs to publish messages to a distributed, scalable messaging service that decouples senders and receivers. Multiple subscribers need to receive copies of the same messages. Which Google Cloud service is designed for this asynchronous messaging?",
                "answerOptions": [
                    {"text": "A. Cloud Tasks", "isCorrect": false, "rationale": "Cloud Tasks is for dispatching asynchronous tasks to a service endpoint."},
                    {"text": "B. Cloud Pub/Sub", "isCorrect": true, "rationale": "Cloud Pub/Sub is the correct choice. It is a fully managed, real-time messaging service that enables asynchronous communication between independent applications. It uses a publisher/subscriber model, allowing one message to be delivered to multiple subscribers."},
                    {"text": "C. Cloud Queues", "isCorrect": false, "rationale": "Cloud Queues is not a standard Google Cloud product name."},
                    {"text": "D. Cloud Functions", "isCorrect": false, "rationale": "Cloud Functions is a compute service, not a messaging service itself."}
                ]
            },
            {
                "question": "You have several Compute Engine instances, and you need to ensure that only specific internal IP addresses from your VPC network can access them via SSH (port 22). Which Google Cloud networking component should you configure to enforce this access control?",
                "answerOptions": [
                    {"text": "A. Routes", "isCorrect": false, "rationale": "Routes define the path of network traffic, not access control."},
                    {"text": "B. Load balancers", "isCorrect": false, "rationale": "Load balancers distribute traffic, but firewall rules are the mechanism for access control."},
                    {"text": "C. Firewall rules", "isCorrect": true, "rationale": "Firewall rules are the correct component. They are used to allow or deny traffic to and from instances based on source IP ranges, protocols, and ports."},
                    {"text": "D. Network interfaces", "isCorrect": false, "rationale": "Network interfaces connect an instance to a subnet, but do not provide access control."}
                ]
            },
            {
                "question": "Your company uses an on-premises Active Directory for user authentication. You want to integrate this with Google Cloud IAM to manage access to Google Cloud resources for your existing users. Which Google Cloud service facilitates this identity federation?",
                "answerOptions": [
                    {"text": "A. Cloud Identity", "isCorrect": true, "rationale": "Cloud Identity is the correct service. It is the Identity as a Service (IDaaS) platform that allows you to manage users and groups and to federate your on-premises Active Directory for single sign-on to Google Cloud and other applications."},
                    {"text": "B. Identity-Aware Proxy (IAP)", "isCorrect": false, "rationale": "IAP provides access control to applications based on a user's identity, not the federation of an on-premises directory."},
                    {"text": "C. Service Accounts", "isCorrect": false, "rationale": "Service Accounts are identities for applications, not human users."},
                    {"text": "D. Managed Service for Microsoft Active Directory", "isCorrect": false, "rationale": "This is a managed AD service on Google Cloud, not a federation service."}
                ]
            },
            {
                "question": "You need to create an image from an existing Compute Engine instance's boot disk to create new identical instances for a testing environment. Which `gcloud` command is used to create a custom image from a disk?",
                "answerOptions": [
                    {"text": "A. `gcloud compute instances create-image`", "isCorrect": false, "rationale": "This is not a valid `gcloud` command."},
                    {"text": "B. `gcloud compute disks snapshot`", "isCorrect": false, "rationale": "This command creates a snapshot, which is a backup, not an image."},
                    {"text": "C. `gcloud compute images create --source-disk`", "isCorrect": true, "rationale": "The `gcloud compute images create` command, when used with the `--source-disk` flag, creates a custom image from an existing persistent disk."},
                    {"text": "D. `gcloud compute instance-templates create`", "isCorrect": false, "rationale": "This command creates a template for new instances, but it is not the command to create the underlying image itself."}
                ]
            },
            {
                "question": "Your application experiences fluctuating traffic patterns throughout the day. You want to ensure your Compute Engine instances automatically scale up during peak hours and scale down during off-peak hours to optimize costs and performance. Which feature of Managed Instance Groups (MIGs) achieves this?",
                "answerOptions": [
                    {"text": "A. Auto-healing", "isCorrect": false, "rationale": "This feature replaces unhealthy instances."},
                    {"text": "B. Instance templates", "isCorrect": false, "rationale": "This defines the configuration of instances in the group."},
                    {"text": "C. Autoscaling", "isCorrect": true, "rationale": "When enabled on a Managed Instance Group, autoscaling automatically adds or removes instances based on metrics like CPU utilization, to optimize costs and performance during fluctuating traffic."},
                    {"text": "D. Rolling updates", "isCorrect": false, "rationale": "This is used to update instances to a new version without downtime."}
                ]
            },
            {
                "question": "You are designing a mobile backend for an application that requires a NoSQL document database with real-time synchronization capabilities, offline support, and client-side SDKs. Which Google Cloud service is ideal for this?",
                "answerOptions": [
                    {"text": "A. Cloud SQL", "isCorrect": false, "rationale": "Cloud SQL is a relational database and does not provide the required NoSQL, real-time, or offline features."},
                    {"text": "B. Cloud Bigtable", "isCorrect": false, "rationale": "Cloud Bigtable is a wide-column NoSQL database optimized for high-throughput, not a document database with real-time sync."},
                    {"text": "C. Cloud Firestore", "isCorrect": true, "rationale": "Cloud Firestore is the correct service. It is a serverless, NoSQL document database with real-time data synchronization, offline support for mobile clients, and powerful client-side SDKs."},
                    {"text": "D. Memorystore", "isCorrect": false, "rationale": "Memorystore is an in-memory data store for caching."}
                ]
            },
            {
                "question": "Your team wants to centralize all Docker images for your applications in Google Cloud. You need a secure, private, and fully managed service for storing and managing these container images. Which Google Cloud service provides a private container registry?",
                "answerOptions": [
                    {"text": "A. Cloud Storage", "isCorrect": false, "rationale": "Cloud Storage can store container images as files, but it is not a dedicated, managed container registry."},
                    {"text": "B. Artifact Registry", "isCorrect": true, "rationale": "Artifact Registry is the correct service. It is a fully managed, private repository for container images and other artifacts, replacing the older Container Registry."},
                    {"text": "C. Docker Hub", "isCorrect": false, "rationale": "Docker Hub is a public registry, not a private one for your organization."},
                    {"text": "D. Cloud Source Repositories", "isCorrect": false, "rationale": "Cloud Source Repositories is for storing source code, not container images."}
                ]
            },
            {
                "question": "You need to configure external DNS for your Google Cloud applications. You require a highly available and scalable DNS service that integrates seamlessly with your Google Cloud resources and provides features like DNSSEC and public DNS zones. Which Google Cloud service should you use?",
                "answerOptions": [
                    {"text": "A. On-premises DNS servers", "isCorrect": false, "rationale": "This would require manual management and would not integrate seamlessly with Google Cloud."},
                    {"text": "B. Third-party DNS provider", "isCorrect": false, "rationale": "While a third-party provider is an option, Cloud DNS provides native integration and features specifically for Google Cloud."},
                    {"text": "C. Cloud DNS", "isCorrect": true, "rationale": "Cloud DNS is the correct service. It is a scalable, highly available, and fully managed DNS service that provides features like DNSSEC and public/private zones, and is tightly integrated with Google Cloud."},
                    {"text": "D. Cloud CDN", "isCorrect": false, "rationale": "Cloud CDN is a content delivery network, not a DNS service."}
                ]
            },
            {
                "question": "Your company has a large dataset in CSV files that needs to be loaded into BigQuery for analysis. The files are currently in a Google Cloud Storage bucket. Which BigQuery command or method is most efficient for bulk loading data from Cloud Storage into a BigQuery table?",
                "answerOptions": [
                    {"text": "A. `INSERT INTO` statement", "isCorrect": false, "rationale": "An `INSERT INTO` statement is used for inserting individual rows, not for efficient bulk loading of large files."},
                    {"text": "B. `bq load` command or BigQuery UI data load", "isCorrect": true, "rationale": "The `bq load` command or the BigQuery UI's data load feature is specifically designed for efficient, large-scale, bulk loading of data from Cloud Storage into BigQuery tables."},
                    {"text": "C. Stream data using Pub/Sub", "isCorrect": false, "rationale": "Streaming is for small amounts of data in real-time, not for large-scale batch loading of existing files."},
                    {"text": "D. Use Cloud SQL Federation", "isCorrect": false, "rationale": "Cloud SQL Federation allows you to query data in Cloud SQL from BigQuery, but it is not a method for loading data into BigQuery."}
                ]
            },
            {
                "question": "You need to migrate a legacy application to Google Cloud that uses a specific version of a Linux distribution and custom libraries. The application requires full control over the operating system. Which Google Cloud compute service offers the most flexibility for OS customization?",
                "answerOptions": [
                    {"text": "A. App Engine Standard", "isCorrect": false, "rationale": "App Engine Standard provides a restricted, sandboxed environment with limited OS control."},
                    {"text": "B. Cloud Run", "isCorrect": false, "rationale": "Cloud Run is a serverless platform that abstracts the operating system, so you don't have direct control."},
                    {"text": "C. Google Kubernetes Engine (GKE)", "isCorrect": false, "rationale": "While GKE provides some control over the container environment, Compute Engine offers the most complete control over the underlying operating system and virtual machine."},
                    {"text": "D. Compute Engine", "isCorrect": true, "rationale": "Compute Engine is the correct choice. As an IaaS offering, it provides full control over the underlying virtual machine and its operating system, allowing for custom configurations and libraries."}
                ]
            },
            {
                "question": "Your company has an existing on-premises network and needs to connect it to a Google Cloud VPC network for hybrid cloud operations. You require a secure, encrypted connection over the public internet. Which Google Cloud networking product is suitable for this?",
                "answerOptions": [
                    {"text": "A. Dedicated Interconnect", "isCorrect": false, "rationale": "Dedicated Interconnect provides a private, physical connection that does not use the public internet."},
                    {"text": "B. Partner Interconnect", "isCorrect": false, "rationale": "Partner Interconnect provides a private connection through a service provider, but a VPN is the answer for a secure, encrypted connection over the public internet."},
                    {"text": "C. Cloud VPN", "isCorrect": true, "rationale": "Cloud VPN is the correct service. It provides a secure, encrypted connection between your on-premises network and your Google Cloud VPC network over the public internet."},
                    {"text": "D. Direct Peering", "isCorrect": false, "rationale": "Direct Peering is for exchanging traffic directly with Google's network, typically for large-scale ISP use cases, not for secure enterprise connectivity."}
                ]
            },
            {
                "question": "You need to ensure that your Compute Engine instances have static internal IP addresses that persist even if the instance is stopped and restarted. Which type of IP address should you configure for the network interface?",
                "answerOptions": [
                    {"text": "A. Ephemeral external IP", "isCorrect": false, "rationale": "An ephemeral external IP address is assigned to an instance and is released when the instance is stopped."},
                    {"text": "B. Ephemeral internal IP", "isCorrect": false, "rationale": "An ephemeral internal IP address is assigned from the subnet range and can change if the instance is stopped and restarted."},
                    {"text": "C. Static external IP", "isCorrect": false, "rationale": "A static external IP address is an external IP address that persists, but the requirement is for an internal IP."},
                    {"text": "D. Static internal IP", "isCorrect": true, "rationale": "A static internal IP address is reserved and persists, ensuring that the IP address of the instance remains the same even after the instance is stopped and restarted."}
                ]
            },
            {
                "question": "You want to deploy a globally distributed application that provides low-latency content delivery to users worldwide. You need to cache static content at edge locations close to your users. Which Google Cloud service is designed for content delivery and caching?",
                "answerOptions": [
                    {"text": "A. Cloud Load Balancing", "isCorrect": false, "rationale": "Cloud Load Balancing distributes traffic across instances but does not provide content caching at the edge."},
                    {"text": "B. Cloud CDN (Content Delivery Network)", "isCorrect": true, "rationale": "Cloud CDN is the correct service. It caches content at Google's global edge network, providing low-latency delivery of static content to users worldwide."},
                    {"text": "C. Cloud Interconnect", "isCorrect": false, "rationale": "Cloud Interconnect provides a private connection to Google's network, not content delivery."},
                    {"text": "D. Cloud DNS", "isCorrect": false, "rationale": "Cloud DNS is a managed DNS service and does not provide content caching."}
                ]
            }
        ]
    }
};