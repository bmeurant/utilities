
allQuizData = {
    "Associate Cloud Engineer": [
        {
            question: "Your company is setting up a new Google Cloud project for a highly sensitive application. You need to ensure that all resources deployed within this project automatically enforce data residency requirements by only allowing deployment in the europe-west1 region. Which of the following is the most effective and scalable way to enforce this policy?",
            options: [
                "A. Manually configure region restrictions for each service after deployment.",
                "B. Create a custom IAM role that restricts resource creation to europe-west1.",
                "C. Use an Organization Policy to create a 'Resource Location Restriction' constraint.",
                "D. Configure firewall rules to block traffic from outside europe-west1."
            ],
            correctAnswer: "C. Use an Organization Policy to create a 'Resource Location Restriction' constraint."
        },
        {
            question: "A development team needs to deploy a containerized application to Google Cloud. They require a fully managed platform that allows rapid deployments, scales automatically based on traffic (including scaling to zero), and supports custom domains and HTTPS without manual certificate management. Which Google Cloud service is the best fit?",
            options: [
                "A. Compute Engine",
                "B. Google Kubernetes Engine (GKE)",
                "C. Cloud Run",
                "D. App Engine Flexible Environment"
            ],
            correctAnswer: "C. Cloud Run"
        },
        {
            question: "You are designing a data analytics pipeline. Raw data arrives in CSV files in a Cloud Storage bucket. You need a serverless service to automatically process these files, transform them, and load them into BigQuery for analysis. Which Google Cloud service should you use to trigger the processing when new files arrive?",
            options: [
                "A. Cloud Dataflow",
                "B. Cloud Functions",
                "C. Cloud Pub/Sub",
                "D. Cloud Composer"
            ],
            correctAnswer: "B. Cloud Functions"
        },
        {
            question: "Your application requires a highly available, relational database that supports standard SQL and automatically handles replication, patching, and backups. You prefer a fully managed service to minimize operational overhead. Which Google Cloud service meets these requirements?",
            options: [
                "A. Compute Engine with PostgreSQL installed",
                "B. Cloud Spanner",
                "C. Cloud SQL",
                "D. Cloud Bigtable"
            ],
            correctAnswer: "C. Cloud SQL"
        },
        {
            question: "You need to migrate an existing web application running on an on-premises Linux server with a MySQL database to Google Cloud. The application architecture should remain largely unchanged, and you want to minimize refactoring. Which Google Cloud compute and database services combination would you recommend?",
            options: [
                "A. App Engine Standard and Cloud Firestore",
                "B. Cloud Run and Cloud Spanner",
                "C. Compute Engine (Linux VM) and Cloud SQL for MySQL",
                "D. Google Kubernetes Engine and Cloud Bigtable"
            ],
            correctAnswer: "C. Compute Engine (Linux VM) and Cloud SQL for MySQL"
        },
        {
            question: "Your company needs to store large archives of historical data (petabytes) that are accessed very rarely (less than once a year) but must be retained for compliance purposes. The primary goal is to minimize storage costs. Which Cloud Storage class is most appropriate?",
            options: [
                "A. Standard",
                "B. Nearline",
                "C. Coldline",
                "D. Archive"
            ],
            correctAnswer: "D. Archive"
        },
        {
            question: "You are setting up a VPC network for your Google Cloud project. You want to ensure that all virtual machines in a specific subnet can access the internet, but external instances cannot initiate connections to them. Which network configuration should you use?",
            options: [
                "A. Apply an ingress firewall rule allowing all traffic.",
                "B. Assign public IP addresses to all VMs and use no egress rule.",
                "C. Use Cloud NAT (Network Address Translation) for the subnet.",
                "D. Peer the VPC with another network that has internet access."
            ],
            correctAnswer: "C. Use Cloud NAT (Network Address Translation) for the subnet."
        },
        {
            question: "A new employee joins your team and needs permission to view all resources in a Google Cloud project but should not be able to modify or delete anything. Which IAM predefined role should you assign to this employee at the project level?",
            options: [
                "A. Editor",
                "B. Viewer",
                "C. Owner",
                "D. Project IAM Admin"
            ],
            correctAnswer: "B. Viewer"
        },
        {
            question: "You need to transfer 50 TB of data from an on-premises data center to Cloud Storage. Your internet connection is slow and unreliable. What is the most efficient and reliable method to perform this large-scale data transfer to Google Cloud?",
            options: [
                "A. Use `gsutil cp` over the internet.",
                "B. Send the data via a Cloud VPN connection.",
                "C. Order a Transfer Appliance from Google.",
                "D. Use Storage Transfer Service for online migration."
            ],
            correctAnswer: "C. Order a Transfer Appliance from Google."
        },
        {
            question: "Your company requires a dedicated, private, and high-bandwidth connection between its on-premises data center and Google Cloud VPC network, ensuring data does not traverse the public internet. Which Google Cloud networking product is designed for this purpose?",
            options: [
                "A. Cloud VPN",
                "B. Shared VPC",
                "C. Dedicated Interconnect",
                "D. Cloud CDN"
            ],
            correctAnswer: "C. Dedicated Interconnect"
        },
        {
            question: "You have a web application running on Compute Engine instances that are behind a global external HTTP(S) Load Balancer. You need to ensure that the load balancer only sends traffic to instances that are healthy and responsive. Which feature of the load balancer accomplishes this?",
            options: [
                "A. Session affinity",
                "B. Autoscaling",
                "C. Health checks",
                "D. CDN integration"
            ],
            correctAnswer: "C. Health checks"
        },
        {
            question: "Your organization has multiple Google Cloud projects, and you want to centralize network management, including IP address allocation and firewall rules, across these projects. Which Google Cloud networking feature should you implement?",
            options: [
                "A. VPC Network Peering",
                "B. Shared VPC",
                "C. Cloud VPN",
                "D. Cloud Router"
            ],
            correctAnswer: "B. Shared VPC"
        },
        {
            question: "You are deploying a highly available application using Compute Engine instances. You need to ensure that if an instance becomes unresponsive, it is automatically replaced. Which Compute Engine feature or service enables this auto-healing capability?",
            options: [
                "A. Preemptible VMs",
                "B. Custom machine types",
                "C. Managed Instance Groups (MIGs) with health checks",
                "D. Sole-tenant nodes"
            ],
            correctAnswer: "C. Managed Instance Groups (MIGs) with health checks"
        },
        {
            question: "A new microservice needs to be deployed that processes messages from a Pub/Sub topic. The service should be highly scalable, fully managed, and only consume resources when messages are available. Which Google Cloud compute service is best suited for this event-driven architecture?",
            options: [
                "A. Compute Engine",
                "B. App Engine Flexible Environment",
                "C. Cloud Functions",
                "D. Google Kubernetes Engine (GKE)"
            ],
            correctAnswer: "C. Cloud Functions"
        },
        {
            question: "You are building an e-commerce application that requires a database with strong consistency, high availability, and global scalability, capable of handling millions of transactions per second. Your data is relational, and you need SQL queries. Which Google Cloud database service is designed for this use case?",
            options: [
                "A. Cloud SQL",
                "B. Cloud Firestore",
                "C. Cloud Spanner",
                "D. Cloud Bigtable"
            ],
            correctAnswer: "C. Cloud Spanner"
        },
        {
            question: "You need to analyze vast amounts of semi-structured data (e.g., JSON logs) in a serverless and cost-effective manner using standard SQL queries. The data volume is in the petabytes, and you don't want to manage any infrastructure. Which Google Cloud service should you choose?",
            options: [
                "A. Cloud SQL",
                "B. Cloud Bigtable",
                "C. BigQuery",
                "D. Cloud Storage"
            ],
            correctAnswer: "C. BigQuery"
        },
        {
            question: "Your application is experiencing performance issues due to slow database queries. You want to implement a caching layer to reduce the load on your primary database and speed up data retrieval. Which Google Cloud service provides a fully managed in-memory data store for caching?",
            options: [
                "A. Cloud Storage",
                "B. Cloud SQL",
                "C. Memorystore",
                "D. Cloud Bigtable"
            ],
            correctAnswer: "C. Memorystore"
        },
        {
            question: "You need to collect logs from various sources across your Google Cloud environment (Compute Engine, App Engine, Cloud Functions) and centralize them for analysis, search, and export. Which Google Cloud service should you use?",
            options: [
                "A. Cloud Monitoring",
                "B. Cloud Trace",
                "C. Cloud Audit Logs",
                "D. Cloud Logging"
            ],
            correctAnswer: "D. Cloud Logging"
        },
        {
            question: "Your team wants to implement continuous deployment for your Google Kubernetes Engine (GKE) applications. You need a service that can automatically build container images from source code, store them, and deploy them to GKE upon code changes. Which Google Cloud services would be part of this CI/CD pipeline?",
            options: [
                "A. Cloud Build, Container Registry, GKE",
                "B. Cloud Functions, Cloud SQL, Cloud Storage",
                "C. Cloud Dataflow, BigQuery, Looker Studio",
                "D. Cloud CDN, Cloud Load Balancing, Cloud Armor"
            ],
            correctAnswer: "A. Cloud Build, Container Registry, GKE"
        },
        {
            question: "You need to monitor the performance of your Compute Engine instances, track CPU utilization, memory usage, and network traffic, and set up custom dashboards and alerts. Which Google Cloud service is designed for this purpose?",
            options: [
                "A. Cloud Logging",
                "B. Cloud Trace",
                "C. Cloud Monitoring",
                "D. Cloud Audit Logs"
            ],
            correctAnswer: "C. Cloud Monitoring"
        },
        {
            question: "Your company wants to migrate an existing Hadoop cluster from on-premises to a fully managed, scalable service on Google Cloud. You need to run Apache Spark and Hadoop MapReduce jobs without managing individual servers. Which Google Cloud service should you use?",
            options: [
                "A. Compute Engine",
                "B. Cloud Dataflow",
                "C. Dataproc",
                "D. BigQuery"
            ],
            correctAnswer: "C. Dataproc"
        },
        {
            question: "You need to grant a service account the minimum necessary permissions to read objects from a specific Cloud Storage bucket. Which predefined IAM role should you assign to the service account?",
            options: [
                "A. roles/storage.admin",
                "B. roles/storage.objectViewer",
                "C. roles/storage.objectCreator",
                "D. roles/viewer"
            ],
            correctAnswer: "B. roles/storage.objectViewer"
        },
        {
            question: "You've deployed a new version of your web application on App Engine. You want to test this new version with a small percentage of your users (e.g., 5%) before rolling it out to everyone. Which App Engine feature allows you to control traffic distribution between different versions?",
            options: [
                "A. Instance scaling settings",
                "B. Traffic splitting",
                "C. Firewall rules",
                "D. Health checks"
            ],
            correctAnswer: "B. Traffic splitting"
        },
        {
            question: "Your team needs to securely store sensitive API keys and database credentials for your application. These secrets need to be versioned, have fine-grained access control, and be auditable. Which Google Cloud service is designed for managing secrets?",
            options: [
                "A. Cloud Storage",
                "B. Cloud Key Management Service (KMS)",
                "C. Secret Manager",
                "D. Environment variables on VMs"
            ],
            correctAnswer: "C. Secret Manager"
        },
        {
            question: "You are responsible for ensuring your Google Cloud environment is compliant with industry standards. You need to review all administrative activities and data access events across your projects to detect suspicious behavior. Which Google Cloud service provides these audit logs?",
            options: [
                "A. Cloud Logging",
                "B. Cloud Monitoring",
                "C. Cloud Audit Logs",
                "D. VPC Flow Logs"
            ],
            correctAnswer: "C. Cloud Audit Logs"
        },
        {
            question: "Your organization needs to create a custom VPC network that spans multiple regions and has specific subnet IP ranges for different environments (e.g., development, staging, production). Which type of VPC network should you create?",
            options: [
                "A. Auto mode network",
                "B. Default network",
                "C. Custom mode network",
                "D. Legacy network"
            ],
            correctAnswer: "C. Custom mode network"
        },
        {
            question: "You want to provision and manage your Google Cloud infrastructure using declarative configuration files rather than manual console operations or imperative scripts. Which Google Cloud infrastructure as code service is the native solution for this?",
            options: [
                "A. Terraform",
                "B. Cloud Build",
                "C. Cloud Deployment Manager",
                "D. Chef/Puppet"
            ],
            correctAnswer: "C. Cloud Deployment Manager"
        },
        {
            question: "An application is designed to store user-generated content (images, videos) that needs to be accessible globally with high durability and availability. The content is accessed frequently. Which Google Cloud storage service is ideal for this use case?",
            options: [
                "A. Persistent Disk",
                "B. Cloud SQL",
                "C. Cloud Storage (Standard storage class)",
                "D. Filestore"
            ],
            correctAnswer: "C. Cloud Storage (Standard storage class)"
        },
        {
            question: "You need to process large batches of data (terabytes) using a serverless, unified programming model (Apache Beam). The processing should be fully managed, automatically scale, and handle failures gracefully. Which Google Cloud service is best suited?",
            options: [
                "A. Dataproc",
                "B. Cloud Functions",
                "C. Cloud Dataflow",
                "D. Compute Engine"
            ],
            correctAnswer: "C. Cloud Dataflow"
        },
        {
            question: "Your Compute Engine instances need to securely and privately access Google APIs (like Cloud Storage or BigQuery) without using external IP addresses or traversing the public internet. Which Google Cloud networking feature enables this?",
            options: [
                "A. Cloud VPN",
                "B. Cloud NAT",
                "C. Private Google Access",
                "D. VPC Network Peering"
            ],
            correctAnswer: "C. Private Google Access"
        },
        {
            question: "You are troubleshooting a latency issue in your microservices application. You need to visualize the end-to-end flow of requests across different services, identify bottlenecks, and see where time is being spent. Which Google Cloud service provides this capability?",
            options: [
                "A. Cloud Logging",
                "B. Cloud Monitoring",
                "C. Cloud Trace",
                "D. Cloud Profiler"
            ],
            correctAnswer: "C. Cloud Trace"
        },
        {
            question: "Your company wants to create a shared file system that can be simultaneously mounted by multiple Compute Engine instances for use cases like shared storage for content management systems or developer home directories. Which Google Cloud service provides managed NFS file storage?",
            options: [
                "A. Cloud Storage",
                "B. Persistent Disk",
                "C. Filestore",
                "D. Cloud Memorystore"
            ],
            correctAnswer: "C. Filestore"
        },
        {
            question: "You need to create an SSH key pair to connect to a new Compute Engine instance. What is the most common and recommended command-line tool to generate this key pair on a Linux/macOS machine?",
            options: [
                "A. `gcloud compute ssh`",
                "B. `ssh-keygen`",
                "C. `openssl genrsa`",
                "D. `gcloud auth login`"
            ],
            correctAnswer: "B. `ssh-keygen`"
        },
        {
            question: "Your team wants to deploy a stateless web application that needs to scale very rapidly and cost-effectively from zero instances to handle spikes in traffic. You prefer to package your application as a Docker container. Which Google Cloud service is the best fit?",
            options: [
                "A. Compute Engine",
                "B. App Engine Standard",
                "C. Google Kubernetes Engine (GKE)",
                "D. Cloud Run"
            ],
            correctAnswer: "D. Cloud Run"
        },
        {
            question: "You need to schedule a daily batch job to run a Python script on a Compute Engine instance at 2 AM every day. The job should start the instance, run the script, and then stop the instance. Which Google Cloud services can be used in combination to achieve this automation?",
            options: [
                "A. Cloud Logging and Cloud Monitoring",
                "B. Cloud Scheduler and Cloud Functions",
                "C. Cloud Build and Container Registry",
                "D. Dataproc and BigQuery"
            ],
            correctAnswer: "B. Cloud Scheduler and Cloud Functions"
        },
        {
            question: "A new security policy requires that all external HTTP(S) traffic to your web application, which is behind a Google Cloud Load Balancer, must be inspected for common web vulnerabilities (e.g., SQL injection, cross-site scripting). Which Google Cloud service provides Web Application Firewall (WAF) capabilities for this purpose?",
            options: [
                "A. Cloud VPN",
                "B. Cloud Armor",
                "C. Cloud DNS",
                "D. Cloud CDN"
            ],
            correctAnswer: "B. Cloud Armor"
        },
        {
            question: "You want to implement a disaster recovery plan for your critical Compute Engine application. This plan includes creating automated, scheduled backups of your persistent disks that are stored in a different region. Which Compute Engine feature enables this?",
            options: [
                "A. Live Migration",
                "B. Managed Instance Groups",
                "C. Persistent Disk snapshots",
                "D. Custom images"
            ],
            correctAnswer: "C. Persistent Disk snapshots"
        },
        {
            question: "Your application needs to publish messages to a distributed, scalable messaging service that decouples senders and receivers. Multiple subscribers need to receive copies of the same messages. Which Google Cloud service is designed for this asynchronous messaging?",
            options: [
                "A. Cloud Tasks",
                "B. Cloud Pub/Sub",
                "C. Cloud Queues",
                "D. Cloud Functions"
            ],
            correctAnswer: "B. Cloud Pub/Sub"
        },
        {
            question: "You have several Compute Engine instances, and you need to ensure that only specific internal IP addresses from your VPC network can access them via SSH (port 22). Which Google Cloud networking component should you configure to enforce this access control?",
            options: [
                "A. Routes",
                "B. Load balancers",
                "C. Firewall rules",
                "D. Network interfaces"
            ],
            correctAnswer: "C. Firewall rules"
        },
        {
            question: "Your company uses an on-premises Active Directory for user authentication. You want to integrate this with Google Cloud IAM to manage access to Google Cloud resources for your existing users. Which Google Cloud service facilitates this identity federation?",
            options: [
                "A. Cloud Identity",
                "B. Identity-Aware Proxy (IAP)",
                "C. Service Accounts",
                "D. Managed Service for Microsoft Active Directory"
            ],
            correctAnswer: "A. Cloud Identity"
        },
        {
            question: "You need to create an image from an existing Compute Engine instance's boot disk to create new identical instances for a testing environment. Which `gcloud` command is used to create a custom image from a disk?",
            options: [
                "A. `gcloud compute instances create-image`",
                "B. `gcloud compute disks snapshot`",
                "C. `gcloud compute images create --source-disk`",
                "D. `gcloud compute instance-templates create`"
            ],
            correctAnswer: "C. `gcloud compute images create --source-disk`"
        },
        {
            question: "Your application experiences fluctuating traffic patterns throughout the day. You want to ensure your Compute Engine instances automatically scale up during peak hours and scale down during off-peak hours to optimize costs and performance. Which feature of Managed Instance Groups (MIGs) achieves this?",
            options: [
                "A. Auto-healing",
                "B. Instance templates",
                "C. Autoscaling",
                "D. Rolling updates"
            ],
            correctAnswer: "C. Autoscaling"
        },
        {
            question: "You are designing a mobile backend for an application that requires a NoSQL document database with real-time synchronization capabilities, offline support, and client-side SDKs. Which Google Cloud service is ideal for this?",
            options: [
                "A. Cloud SQL",
                "B. Cloud Bigtable",
                "C. Cloud Firestore",
                "D. Memorystore"
            ],
            correctAnswer: "C. Cloud Firestore"
        },
        {
            question: "Your team wants to centralize all Docker images for your applications in Google Cloud. You need a secure, private, and fully managed service for storing and managing these container images. Which Google Cloud service provides a private container registry?",
            options: [
                "A. Cloud Storage",
                "B. Artifact Registry",
                "C. Docker Hub",
                "D. Cloud Source Repositories"
            ],
            correctAnswer: "B. Artifact Registry"
        },
        {
            question: "You need to configure external DNS for your Google Cloud applications. You require a highly available and scalable DNS service that integrates seamlessly with your Google Cloud resources and provides features like DNSSEC and public DNS zones. Which Google Cloud service should you use?",
            options: [
                "A. On-premises DNS servers",
                "B. Third-party DNS provider",
                "C. Cloud DNS",
                "D. Cloud CDN"
            ],
            correctAnswer: "C. Cloud DNS"
        },
        {
            question: "Your company has a large dataset in CSV files that needs to be loaded into BigQuery for analysis. The files are currently in a Google Cloud Storage bucket. Which BigQuery command or method is most efficient for bulk loading data from Cloud Storage into a BigQuery table?",
            options: [
                "A. `INSERT INTO` statement",
                "B. `bq load` command or BigQuery UI data load",
                "C. Stream data using Pub/Sub",
                "D. Use Cloud SQL Federation"
            ],
            correctAnswer: "B. `bq load` command or BigQuery UI data load"
        },
        {
            question: "You need to migrate a legacy application to Google Cloud that uses a specific version of a Linux distribution and custom libraries. The application requires full control over the operating system. Which Google Cloud compute service offers the most flexibility for OS customization?",
            options: [
                "A. App Engine Standard",
                "B. Cloud Run",
                "C. Google Kubernetes Engine (GKE)",
                "D. Compute Engine"
            ],
            correctAnswer: "D. Compute Engine"
        },
        {
            question: "Your company has an existing on-premises network and needs to connect it to a Google Cloud VPC network for hybrid cloud operations. You require a secure, encrypted connection over the public internet. Which Google Cloud networking product is suitable for this?",
            options: [
                "A. Dedicated Interconnect",
                "B. Partner Interconnect",
                "C. Cloud VPN",
                "D. Direct Peering"
            ],
            correctAnswer: "C. Cloud VPN"
        },
        {
            question: "You need to ensure that your Compute Engine instances have static internal IP addresses that persist even if the instance is stopped and restarted. Which type of IP address should you configure for the network interface?",
            options: [
                "A. Ephemeral external IP",
                "B. Ephemeral internal IP",
                "C. Static external IP",
                "D. Static internal IP"
            ],
            correctAnswer: "D. Static internal IP"
        },
        {
            question: "You want to deploy a globally distributed application that provides low-latency content delivery to users worldwide. You need to cache static content at edge locations close to your users. Which Google Cloud service is designed for content delivery and caching?",
            options: [
                "A. Cloud Load Balancing",
                "B. Cloud CDN (Content Delivery Network)",
                "C. Cloud Interconnect",
                "D. Cloud DNS"
            ],
            correctAnswer: "B. Cloud CDN (Content Delivery Network)"
        }
    ]
};